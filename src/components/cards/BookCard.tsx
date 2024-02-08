import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Show,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Book } from "../../hooks/useBooks";
import Rating from "./Rating";
import FormatIcon from "./FormatIcon";
import noImage from "../../assets/no-cover.png";

interface Props {
  book: Book;
}
const BookCard = ({ book }: Props) => {
  return (
    <Card borderRadius={25} padding={0} width="90%">
      <Flex alignContent={"center"} justifyContent={"center"}>
        <Show above="md">
          <Image
            height="230px"
            width="100%"
            src={book.img || noImage}
            borderRadius={25}
            paddingTop={0}
          ></Image>
        </Show>
      </Flex>
      <CardBody height="40px">
        <HStack justifyContent="space-between" marginBottom="3">
          <Heading fontSize="xl">{book.title}</Heading>

          <FormatIcon
            format={book.audiobook ? "audiobook" : "physical"}
            title={book.title}
          />
        </HStack>
        <Text fontSize="large">Author: {book.author}</Text>
        <HStack>
          <Rating rating={book.rating || 0}></Rating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
