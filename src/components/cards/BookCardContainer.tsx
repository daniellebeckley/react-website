import { Box, Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BookCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={15}
      overflow="hidden"
      paddingLeft={2}
      paddingRight={2}
      // width={"200px"}
    >
      {children}
    </Box>
  );
};

export default BookCardContainer;
