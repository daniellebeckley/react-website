import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onToggle: () => void;
}
const FavoriteSwitch = ({ onToggle }: Props) => {
  return (
    <HStack>
      <Switch size="lg" colorScheme="pink" onChange={onToggle} />
      <Text>favorites</Text>
    </HStack>
  );
};

export default FavoriteSwitch;
