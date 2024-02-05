import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, loading } = useGenres();
  if (loading) return <Spinner size="xl"></Spinner>;
  if (error) return null;
  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem
            paddingY="5px"
            key={genre.id}
            onClick={() => {
              onSelectGenre(genre);
            }}
          >
            <HStack key={genre.id}>
              <Image
                key={genre.name}
                paddingBlock={1}
                borderRadius={8}
                boxSize="42px"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              //change this to a button that logs the genre (or the function)
              <Button
                fontSize="lg"
                key={genre.id}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
