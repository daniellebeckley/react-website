import { HStack } from "@chakra-ui/react";
import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { ReactNode } from "react";
interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  // var elements = [];
  // for (let i = 0; i < rating; i++) {
  //   elements.push(
  //     <TiStarOutline key={i} fill="#ff6b81" size={15}></TiStarOutline>
  //   );
  // }
  return (
    <TiStarOutline key={"unique"} fill="#ff6b81" size={15}></TiStarOutline>
  );
};
export default Rating;
