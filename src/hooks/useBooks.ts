import books18 from "../data/books18";
import books19 from "../data/books19";
import books20 from "../data/books20";
import books21 from "../data/books21";
import books22 from "../data/books22";
import books23 from "../data/books23";
import books24 from "../data/books24";

export interface Book {
  title: string;
  author: string;
  rating?: number;
  audiobook?: boolean;
  img?: string;
}

const useBooks = (year: number) => {
  if (year === 2018) return books18;
  if (year === 2019) return books19;
  if (year === 2020) return books20;
  if (year === 2021) return books21;
  if (year === 2022) return books22;
  if (year === 2023) return books23;
  if (year === 2024) return books24;
  return [];
};
export default useBooks;
