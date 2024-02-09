import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import Filter from "./components/Filter";
import { useState } from "react";

function App() {
  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  const [format, setFormat] = useState("");

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
        <NavBar />
        <Filter
          onClick={(type) => {
            setFormat(type);
            console.log("set the type to" + type);
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={5}
          fontSize="5xl"
          margin="3"
          paddingY={100}
        ></GridItem>
      </Show>
      <GridItem area="main">
        <Heading as="h1" marginY={5} fontSize="5xl">
          Books
        </Heading>
        <Flex alignContent={"center"} justifyContent={"center"}>
          <Box>
            {years.map((year) => (
              <BookGrid
                key={"year" + year}
                year={year}
                format={format}
              ></BookGrid>
            ))}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
