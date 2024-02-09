import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/lightning.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaReact } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <FaReact size={50} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
