import { Box, Button, Flex } from "@chakra-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";
import * as React from "react";
import { Link } from "../ui";

export const Layout: React.FC = ({ children }) => {
  const [session] = useSession();
  console.log("session:", session);
  {
    /* {!session ? (
          <button onClick={() => signIn("github")}>Sign in</button>
        ) : (
          <button onClick={() => signOut()}>Sign out</button>
        )} */
  }
  return (
    <>
      <Flex
        as="nav"
        justifyContent="space-between"
        mx="auto"
        maxW="960px"
        align="center"
      >
        <h1>Logo</h1>
        <Flex as="ul" w="50%" justifyContent="space-between" align="center">
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/previous-ideas">Previous</Link>
          </li>
          <Link href={session ? "/new" : "/login"}>New Idea</Link>
          {!session ? (
            <li>
              <Button onClick={() => signIn("github")}>Log in</Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => signOut()}>Log out</Button>
            </li>
          )}
        </Flex>
      </Flex>
      <Box maxW="960px" mx="auto" my={10}>
        {children}
      </Box>
    </>
  );
};
