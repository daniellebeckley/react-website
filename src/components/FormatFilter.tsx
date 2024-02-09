import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onFormatSelected: (audiobook: string) => void;
  selectedFormat: string;
}
const FormatFilter = ({ onFormatSelected, selectedFormat }: Props) => {
  const types = ["all", "audiobook", "physical"];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        format : {selectedFormat}
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
