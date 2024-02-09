import { Grid, GridItem, Show, Flex, HStack, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import BookGrid from "./BookGrid";
import FavoriteSwitch from "./FavoriteSwitch";
import FormatFilter from "../FormatFilter";

const BookPage = () => {
  const years = [2024, 2023, 2022, 2021, 2020, 2019];
  const [format, setFormat] = useState("");
  const [favorite, setFavorite] = useState(false);
  return (
    <Flex alignContent={"center"} justifyContent={"center"}>
      <Box>
        <Flex alignContent={"left"} justifyContent={"right"} paddingRight="10%">
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
  );
};

export default BookPage;
