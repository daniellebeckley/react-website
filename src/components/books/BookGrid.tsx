import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";

import BookCardContainer from "./BookCardContainer";
import useBooks, { Book } from "../../hooks/useBooks";
import React from "react";

interface Props {
  year: number;
  format: string;
  favorite: boolean;
}
const BookGrid = ({ year, format, favorite }: Props) => {
  let books = useBooks(year);
  let displayBooks: Book[] = [...books];

  if (format === "audiobook") {
    displayBooks = [];
    books.forEach((b: Book) => {
      if (b.audiobook) {
        displayBooks.push(b);
      }
    });
  }
  if (format === "physical") {
    displayBooks = [];
    books.forEach((b: Book) => {
      if (!b.audiobook) {
        displayBooks.push(b);
      }
    });
  }

  if (favorite) displayBooks = displayBooks.filter((b: Book) => b.favorite);

  return (
    <>
      <Heading>{year}</Heading>
      <Text paddingLeft={3}>Total: {displayBooks.length}</Text>
      <SimpleGrid
        columns={{ base: 2, sm: 4, md: 4, lg: 6, xl: 8 }}
        paddingX="5%"
        width="90%"
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
