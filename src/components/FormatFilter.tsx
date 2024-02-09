import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

interface Props {
  onFormatSelected: (audiobook: string) => void;
  selectedFormat: string;
}
const FormatFilter = ({ onFormatSelected, selectedFormat }: Props) => {
  const types = ["all", "audiobook", "physical"];
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoIosArrowDropdown size={20} color="pink" />}
      >
        format : {selectedFormat || "all"}
      </MenuButton>
      <MenuList>
        {types.map((type) => (
          <MenuItem key={type} onClick={() => onFormatSelected(type)}>
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FormatFilter;
