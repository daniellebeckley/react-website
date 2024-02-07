import { HStack } from "@chakra-ui/react";
import { PiPopcornLight } from "react-icons/pi";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  var elements = [];
  for (let i = 0; i < rating; i++) {
    elements.push(
      <PiPopcornLight key={i} fill="#ff6b81" size={25}></PiPopcornLight>
    );
  }
  return elements;
};
export default Rating;
