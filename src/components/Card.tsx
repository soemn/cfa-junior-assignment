import { Box, Image, Text, Spacer, Center } from "@chakra-ui/react";
import DateBox from "./DateBox";
import { ReadMoreButton } from "./Buttons";
import { ChatIcon } from "@chakra-ui/icons";
import "../index.css";

interface ImageInformation {
  ImageSrc: string;
  ImageAlt: string;
  Header: string;
  Description: string;
  // Comments: number;
}

export function Card(props: ImageInformation) {
  return (
    <Box borderRadius="sm" boxShadow="xs" className="section">
      <Box pos="relative">
        <Image objectFit="cover" src={props.ImageSrc} alt={props.ImageAlt} />
        <DateBox Day="26" Month="Nov" Year="2019"></DateBox>
      </Box>
      <Box p="6">
        <Text fontWeight="bold" fontSize="md">
          {props.Header}
        </Text>
        <Text fontSize="sm">{props.Description}</Text>
      </Box>
      <Box display={"flex"} minWidth="max-content" p="6">
        <ReadMoreButton />
        <Spacer />
        <Box display={"flex"}>
          <Center gap="1">
            <Text fontSize={"xs"}>Admin</Text>
            <ChatIcon color={"gray"} />
            {/* <Text fontSize={"xs"}>{props.Comments}</Text> */}
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
