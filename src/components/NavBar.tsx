import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import logo from "../assets/lightning.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <FaReact size={50} />
        <List>
          <HStack>
            <ListItem padding="10%">
              <NavLink to="/about">About</NavLink>
            </ListItem>
            <ListItem padding="10%">
              <NavLink to="/book">Books</NavLink>
            </ListItem>
            <ListItem padding="10%">
              <NavLink to="/resume">Resumé</NavLink>
            </ListItem>
          </HStack>
        </List>

        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
