import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

//optional - passing in genre or platform to have the api filter - send params object from axios
const useGames = (sortOrder?: string) =>
  useData<Game>(
    "/games",
    {
      params: {
        sortOrder: sortOrder,
      },
    },
    [sortOrder]
  );

export default useGames;
