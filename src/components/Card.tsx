import { Box, Image, Text, Grid, HStack, GridItem } from "@chakra-ui/react";
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
      <Grid templateRows={"1fr 150px auto"}>
        <GridItem rowSpan={1}>
          <Box pos="relative">
            <Image
              objectFit="cover"
              w={"100%"}
              maxHeight={"300px"}
              src={props.ImageSrc}
              alt={props.ImageAlt}
            />
            <DateBox Day="26" Month="Nov" Year="2019"></DateBox>
          </Box>
        </GridItem>

        <GridItem p={3} rowSpan={1}>
          <Text fontWeight="bold" fontSize="md">
            {props.Header}
          </Text>
          <Text fontSize="sm">{props.Description}</Text>
        </GridItem>

        <GridItem p={3} rowSpan={1} rowStart={3} rowEnd={4}>
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem>
              <ReadMoreButton />
            </GridItem>

            <GridItem colStart={5} colEnd={6} display={"flex"} gap={1}>
              <Text fontSize={"xs"} textAlign="end">
                Admin
              </Text>
              <ChatIcon color={"gray"} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
