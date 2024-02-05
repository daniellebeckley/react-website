import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (value: string) => void;
  selectedSortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date Added" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => onSelectSortOrder(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
