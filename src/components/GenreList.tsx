import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onClick: (id: number) => void;
}
const GenreList = ({ onClick }: Props) => {
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
              onClick(genre.id);
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
              <Text fontSize="lg" key={genre.id}>
                {" "}
                {genre.name}{" "}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
