import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  var elements = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    elements.push(
      <TiStarFullOutline key={i} fill="#ff6b81" size={15}></TiStarFullOutline>
    );
  }
  if (rating.toString().substring(2) === "5") {
    elements.push(
      <TiStarHalfOutline
        key={"half"}
        fill="#ff6b81"
        size={15}
      ></TiStarHalfOutline>
    );
  }
  return <>{elements}</>;
};
export default Rating;
