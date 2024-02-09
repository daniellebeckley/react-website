import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onClick: (audiobook: string) => void;
}
const Filter = ({ onClick }: Props) => {
  const types = ["audiobook", "physical"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Format
      </MenuButton>
      <MenuList>
        {types.map((type) => (
          <MenuItem key={type} onClick={() => onClick(type)}>
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Filter;
