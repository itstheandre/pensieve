import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { prisma } from "../../../prisma";
import nc from "next-connect";
import { User } from "@prisma/client";

interface RequestWithUser extends NextApiRequest {
  user: User;
}

type NReq = RequestWithUser;
type Nreq = NReq;
type NRes = NextApiResponse;
type Nres = NRes;

const handler = nc().get<NReq, NRes>(async (req, res) => {
  const allPreviousIdeas = await prisma.idea.findMany({
    orderBy: {
      added: "asc",
    },

    include: {
      user: true,
    },
  });

  console.log("allPreviousIdeas:", allPreviousIdeas);
  res.json(allPreviousIdeas);
});

handler
  .use<Nreq, Nres>(async (req, res, next) => {
    console.log("INSIDE USE");
    const session = await getSession({ req });
    if (!session) {
      return res.status(400).json({ message: "Nicht logged in" });
    }

    const [user] = await prisma.user.findMany({
      where: {
        AND: {
          name: {
            contains: session.user.name,
          },
          image: {
            contains: session.user.image,
          },
          //   image: session.user.name,
        },
      },
    });

    req.user = user;
    next();
  })
  .post<Nreq, Nres>(async (req, res) => {
    console.log("INSIDE POST");
    const newIdea = await prisma.idea.create({
      data: {
        description: "First idea",
        user: {
          connect: {
            id: req.user.id,
          },
        },
      },
    });

    res.json(newIdea);
  });

export default handler;

// export default async function Idea(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(200).json({ message: "Nicht logged in" });
//   }
//   const [user] = await prisma.user.findMany({
//     where: {
//       AND: {
//         name: {
//           contains: session.user.name,
//         },
//         image: {
//           contains: session.user.image,
//         },
//         //   image: session.user.name,
//       },
//     },
//   });
//   //   console.log("session:", session);
//   //   console.log("user:", user);
//   res.status(200).json({ message: "true that" });
// }
