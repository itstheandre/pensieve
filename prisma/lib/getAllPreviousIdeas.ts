import { UnPromise } from "../../utils";
import { prisma } from "./client";

export const allPreviousIdeas = () =>
  prisma.idea.findMany({
    orderBy: {
      added: "asc",
    },

    include: {
      user: true,
    },
  });

export type AllPreviousIdeas = UnPromise<typeof allPreviousIdeas>;
