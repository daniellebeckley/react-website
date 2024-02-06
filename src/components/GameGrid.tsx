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
    data: games,
    error,
    loading,
    setData: setGames,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (games.length < 1 && !loading) {
    return (
      <>
        <Text>Sorry, no games meet your selection.</Text>
      </>
    );
  }
  if (error) return <Text>Error! : {error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {loading &&
        skeletons.map((skel) => (
          <GameCardContainer key={"skeleton" + skel}>
            <GameCardSkeleton key={skel} />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={"game" + game.id}>
          <GameCard key={game.id} game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
