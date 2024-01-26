import useGenres from "../hooks/useGenres";
import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <HStack key={genre.id}>
          <Image
            key={genre.name}
            paddingBlock={1}
            height={10}
            width={10}
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
          />
          <Text key={genre.id}> {genre.name} </Text>
        </HStack>
      ))}
    </>
  );
};

export default GenreList;
