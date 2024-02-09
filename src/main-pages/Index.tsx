import { Box, Button, Heading, Image, Stack } from "@chakra-ui/react";
import CraterLake from "../assets/crater.jpg";
import React from "react";
const Index = () => {
  return (
    <>
      <Heading>I am Danielle Smith.</Heading>
      <Image src={CraterLake} paddingRight="20%"></Image>
    </>
  );
};

export default Index;
