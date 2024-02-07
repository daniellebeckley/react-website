import { Box, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import BookGrid from "./components/BookGrid";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          ></GenreList> */}
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <Heading as="h1" marginY={5} fontSize="5xl">
            Books
          </Heading>
          {years.map((year) => (
            <BookGrid year={year}></BookGrid>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
