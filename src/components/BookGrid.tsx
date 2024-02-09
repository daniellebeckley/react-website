import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./cards/BookCard";

import BookCardContainer from "./cards/BookCardContainer";
import useBooks, { Book } from "../hooks/useBooks";

interface Props {
  year: number;
  format: string;
}
const BookGrid = ({ year, format }: Props) => {
  let books = useBooks(year);
  let displayBooks = [...books];
  if (format === "audiobook") {
    console.log("filtering");
    displayBooks = books.filter((b: Book) => b.audiobook);
  }
  if (format === "physical")
    displayBooks = books.filter((b: Book) => !b.audiobook);

  return (
    <>
      <Heading>{year}</Heading>
      <Text paddingLeft={3}>Total: {books.length}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingX={50}
        width="1000px"
      >
        {displayBooks.map((book: Book) => (
          <BookCardContainer key={"book" + year + book.title}>
            <BookCard key={book.title} book={book}></BookCard>
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
