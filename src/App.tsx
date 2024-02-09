import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import FormatFilter from "./components/FormatFilter";
import { useState } from "react";
import FavoriteFilter from "./components/FavoriteSwitch";
import FavoriteSwitch from "./components/FavoriteSwitch";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  const [format, setFormat] = useState("");
  const [favorite, setFavorite] = useState(false);
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
        <Flex alignContent={"center"} justifyContent={"center"}>
          <Box>
            <Flex alignContent={"left"} justifyContent={"right"}>
              <HStack padding={50}>
                <FormatFilter
                  selectedFormat={format}
                  onFormatSelected={(type) => {
                    setFormat(type);
                  }}
                />
                <FavoriteSwitch onToggle={() => setFavorite(!favorite)} />
              </HStack>
            </Flex>
            {years.map((year) => (
              <BookGrid
                key={"year" + year}
                year={year}
                format={format}
                favorite={favorite}
              ></BookGrid>
            ))}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
