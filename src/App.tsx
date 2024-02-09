import { Grid, GridItem, Show } from "@chakra-ui/react";
import Index from "./main-pages/Index";
import NavBar from "./components/NavBar";
import BookPage from "./main-pages/BookPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./main-pages/ResumePage";
import AboutMe from "./main-pages/AboutMe";
import React, { useEffect } from "react";

export const REPO_NAME = "react-website/";

function App() {
  useEffect(() => {
    document.title = "Dani's Website";
  }, []);

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
              <Route path={REPO_NAME} element={<Index />} />
              <Route path={REPO_NAME + "book"} element={<BookPage />} />
              <Route path={REPO_NAME + "resume"} element={<ResumePage />} />
              <Route path={REPO_NAME + "about"} element={<AboutMe />} />
            </Routes>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </>
  );
  {
  }
}

export default App;
