import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IoBook } from "react-icons/io5";
import { PiHeadphonesDuotone } from "react-icons/pi";

interface Prop {
  format: string;
  title: string;
}

const FormatIcon = ({ format, title }: Prop) => {
  const iconMap: { [key: string]: IconType } = {
    physical: IoBook,
    audiobook: PiHeadphonesDuotone,
  };

  return (
    <HStack marginY={1}>
      <Icon
        as={iconMap[format]}
        color="gray.500"
        key={"icon" + title}
        boxSize={6}
        paddingRight={1}
      />
    </HStack>
  );
};

export default FormatIcon;
