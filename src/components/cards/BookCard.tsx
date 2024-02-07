import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { Book } from "../../hooks/useBooks";
import Rating from "./Rating";
import FormatIcon from "./FormatIcon";
import noImage from "../../assets/no-image-placeholder.webp";

interface Props {
  book: Book;
}
const BookCard = ({ book }: Props) => {
  return (
    <Card borderRadius={25}>
      <Image height="350px" width="300px" src={book.img || noImage}></Image>

      <CardBody height="200px">
        <HStack justifyContent="space-between" marginBottom="3">
          <Heading fontSize="2xl">{book.title}</Heading>

          <FormatIcon
            format={book.audiobook ? "audiobook" : "physical"}
            title={book.title}
          />
        </HStack>
        <Text fontSize="xl">Author: {book.author}</Text>
        <HStack>
          <Rating rating={book.rating || 0}></Rating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
