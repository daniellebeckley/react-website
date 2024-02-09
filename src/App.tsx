import { Grid, GridItem, Show } from "@chakra-ui/react";
import AboutMe from "./AboutMe";
import NavBar from "./components/NavBar";
import BookPage from "./components/books/BookPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./ResumePage";

function App() {
  return (
    <>
      <BrowserRouter>
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
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </>
  );
  {
    /* return <BookPage />; */
  }
}

export default App;
