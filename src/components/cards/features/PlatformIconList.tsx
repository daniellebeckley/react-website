import { IoLogoXbox } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { SiPlaystation } from "react-icons/si";
import { BsApple, BsGlobe } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinux } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../../../hooks/useGames";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Prop {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Prop) => {
  const iconMap: { [key: string]: IconType } = {
    xbox: IoLogoXbox,
    pc: RiComputerLine,
    playstation: SiPlaystation,
    mac: BsApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: GrAndroid,
    web: BsGlobe,
    linux: FaLinux,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
