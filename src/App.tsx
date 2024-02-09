import { Grid, GridItem, Show } from "@chakra-ui/react";
import Index from "./main-pages/Index";
import NavBar from "./components/NavBar";
import BookPage from "./main-pages/BookPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./main-pages/ResumePage";
import AboutMe from "./main-pages/AboutMe";
import React from "react";

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
              <Route path="/index" element={<Index />} />
              <Route path="/" element={<Index />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/about" element={<AboutMe />} />
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
