import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./cards/GameCard";
import GameCardSkeleton from "./cards/GameCardSkeleton";
import GameCardContainer from "./cards/GameCardContainer";
import useGames from "../hooks/useGames";

interface Props {
  selectedGenre: number;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, loading, setData: setGames } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const showGames =
    selectedGenre === -1
      ? games
      : [
          ...games.filter((game) => {
            game.genres.length > 3 && games.length;
            const genreIds = game.genres.map((g) => g.id);
            const has: number = genreIds.indexOf(selectedGenre);
            return has > -1 ? game : null;
          }),
        ];
  if (showGames.length < 1 && !loading) {
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
        {showGames.map((game) => (
          <GameCardContainer key={"game" + game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
