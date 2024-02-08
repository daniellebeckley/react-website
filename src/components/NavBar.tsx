import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/lightning.png";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
