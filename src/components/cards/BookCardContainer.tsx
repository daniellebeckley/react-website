import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BookCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={15} width="300px" overflow="hidden">
      {children}
    </Box>
  );
};

export default BookCardContainer;
