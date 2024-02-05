import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./cards/GameCard";
import GameCardSkeleton from "./cards/GameCardSkeleton";
import GameCardContainer from "./cards/GameCardContainer";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: allGames,
    error,
    loading,
    setData: setGames,
  } = useGames(gameQuery.sort);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  let filteredGames = [...allGames];
  if (gameQuery?.platform) {
    filteredGames = [
      ...filteredGames.filter((game) => {
        const parentPlatformIds = game.parent_platforms.map(
          (platform) => platform.platform.id
        );
        const has: number = parentPlatformIds.indexOf(
          gameQuery.platform?.id || 0
        );
        return has > -1 ? game : null;
      }),
    ];
  }
  if (gameQuery?.genre) {
    filteredGames = [
      ...filteredGames.filter((game) => {
        const genreIds = game.genres.map((g) => g.id);
        const has: number = genreIds.indexOf(gameQuery.genre?.id || 0);
        return has > -1 ? game : null;
      }),
    ];
  }
  if (filteredGames.length < 1 && !loading) {
    return (
      <>
        <Text>Sorry, no games meet your selection.</Text>
      </>
    );
  }

  return (
    <>
      {error && <Text>Error! : {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {loading &&
          skeletons.map((skel) => (
            <GameCardContainer key={"skeleton" + skel}>
              <GameCardSkeleton key={skel} />
            </GameCardContainer>
          ))}
        {filteredGames.map((game) => (
          <GameCardContainer key={"game" + game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
