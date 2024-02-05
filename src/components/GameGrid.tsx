import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./cards/GameCard";
import GameCardSkeleton from "./cards/GameCardSkeleton";
import GameCardContainer from "./cards/GameCardContainer";
import useGames from "../hooks/useGames";

interface Props {
  selectedGenre: number;
  selectedPlatform: number;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data: allGames, error, loading, setData: setGames } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  let filteredGames = [...allGames];
  if (selectedPlatform !== -1) {
    filteredGames = [
      ...filteredGames.filter((game) => {
        const parentPlatformIds = game.parent_platforms.map(
          (platform) => platform.platform.id
        );
        const has: number = parentPlatformIds.indexOf(selectedPlatform);
        return has > -1 ? game : null;
      }),
    ];
  }
  if (selectedGenre !== -1) {
    filteredGames = [
      ...filteredGames.filter((game) => {
        const genreIds = game.genres.map((g) => g.id);
        const has: number = genreIds.indexOf(selectedGenre);
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
