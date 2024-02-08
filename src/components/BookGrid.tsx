import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./cards/BookCard";

import BookCardContainer from "./cards/BookCardContainer";
import useBooks, { Book } from "../hooks/useBooks";

interface Props {
  year: number;
}
const BookGrid = ({ year }: Props) => {
  const books = useBooks(year);

  return (
    <>
      <Heading>{year}</Heading>
      <Text>Total: {books.length}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="150px"
        spacing={5}
      >
        {books.map((book: Book) => (
          <BookCardContainer key={"book" + book.title}>
            <BookCard key={book.title} book={book}></BookCard>
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
