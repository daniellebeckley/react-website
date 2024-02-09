import { HStack } from "@chakra-ui/react";
import { TiStarOutline } from "react-icons/ti";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  var elements = [];
  for (let i = 0; i < rating; i++) {
    elements.push(
      <TiStarOutline key={i} fill="#ff6b81" size={15}></TiStarOutline>
    );
  }
  return elements;
};
export default Rating;
