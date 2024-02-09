import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./cards/BookCard";

import BookCardContainer from "./cards/BookCardContainer";
import useBooks, { Book } from "../hooks/useBooks";

interface Props {
  year: number;
  format: string;
  favorite: boolean;
}
const BookGrid = ({ year, format, favorite }: Props) => {
  let books = useBooks(year);
  let displayBooks = [...books];

  if (format === "audiobook") {
    console.log("filtering");
    displayBooks = books.filter((b: Book) => b.audiobook);
  }
  if (format === "physical")
    displayBooks = books.filter((b: Book) => !b.audiobook);

  if (favorite) displayBooks = displayBooks.filter((b: Book) => b.favorite);

  return (
    <>
      <Heading>{year}</Heading>
      <Text paddingLeft={3}>Total: {displayBooks.length}</Text>
      <SimpleGrid
        columns={{ base: 4, sm: 6, md: 6, lg: 8, xl: 8 }}
        paddingX={50}
        width="1200px"
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
