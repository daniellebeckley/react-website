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
    <Card borderRadius={15} padding={0} width="90%">
      <Flex alignContent={"center"} justifyContent={"center"}>
        <Show above="sm">
          <Image
            height="130px"
            width="500%"
            src={book.img || noImage}
            borderRadius={5}
            paddingTop={0}
          ></Image>
        </Show>
        <Show below="sm">
          <Image
            height="130px"
            width="70%"
            src={book.img || noImage}
            borderRadius={5}
            paddingTop={0}
          ></Image>
        </Show>
      </Flex>
      <CardBody height="100px" padding={1}>
        <HStack justifyContent="space-between" marginBottom="3">
          <Heading fontSize="sm">{book.title}</Heading>

          <FormatIcon
            format={book.audiobook ? "audiobook" : "physical"}
            title={book.title}
          />
        </HStack>
        <Text fontSize="xs">Author: {book.author}</Text>
        <HStack>
          <Rating rating={book.rating || 0}></Rating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
