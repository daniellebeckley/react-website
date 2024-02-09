import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";
import { REPO_NAME } from "../App";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <FaReact size={50} />
        <List>
          <HStack>
            <ListItem>
              <NavLink to={REPO_NAME}>Index</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={REPO_NAME + "book"}>Books</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={REPO_NAME + "resume"}>Resumé</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={REPO_NAME + "about"}>About</NavLink>
            </ListItem>
          </HStack>
        </List>

        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
