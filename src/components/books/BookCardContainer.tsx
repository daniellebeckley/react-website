import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BookCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={15} overflow="hidden" paddingX={1} paddingBottom={10}>
      {children}
    </Box>
  );
};

export default BookCardContainer;
