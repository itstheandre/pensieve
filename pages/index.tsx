import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { Heading, Box } from "@chakra-ui/core";
import { PrismaClient, User } from "@prisma/client";

export default function Home(props) {
  console.log("props:", props);
  const [session] = useSession();
  // console.log("session:", session);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <h1 className="text-blue-700">My next park</h1> */}

        {/* <Box as="h1">Hello</Box>
        <Heading fontSize={["xs", "4xl", "5xl", "6xl"]}>
          (2xl) In love with React & Next
        </Heading>
        <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
        <Heading fontSize={["xs", "4xl", "5xl", "6xl"]}>
          @chakra-ui/1.0.0-rc.8
        </Heading>
        <Box>
          <Heading fontSize={["xs", "4xl", "5xl", "6xl"]}>
            @chakra-ui/1.0.0-rc.8
          </Heading>
        </Box> */}
        {/* <h1
          style={{
            WebkitTextStroke: "1px black",
            color: "white",
            fontSize: "50px",
          }}
        >
          Hey there
        </h1> */}
        {/* {!session ? (
          <button onClick={() => signIn("github")}>Sign in</button>
        ) : (
          <button onClick={() => signOut()}>Sign out</button>
        )} */}
      </main>
    </div>
  );
}
