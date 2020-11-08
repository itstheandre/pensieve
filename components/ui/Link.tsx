import * as React from "react";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/core";
import NextLink from "next/link";

interface LinkProps extends ChakraLinkProps {
  children: React.ReactNode;
}

export const Link: React.FC<ChakraLinkProps> = ({
  children,
  href,
  className,
  id,
  ...rest
}) => {
  return (
    <ChakraLink as="div" {...rest}>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </ChakraLink>
  );
};
