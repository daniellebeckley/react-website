import { Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import resume from "./assets/BECKLEY_DANIELLE.pdf";
import { BsDownload } from "react-icons/bs";

const ResumePage = () => {
  return (
    <>
      <Heading>Resume Page</Heading>
      <a href="/src/assets/BECKLEY_DANIELLE.pdf" download>
        <BsDownload size={55} />
      </a>
    </>
  );
};

export default ResumePage;
