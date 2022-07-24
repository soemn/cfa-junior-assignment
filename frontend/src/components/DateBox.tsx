import { Box, Text } from "@chakra-ui/react";

interface DateInformation {
  Day: string;
  Month: string;
  Year: string;
}

export default function DateBox(props: DateInformation) {
  return (
    <Box
      pos="absolute"
      display="flex"
      flexDirection="column"
      textAlign="center"
      bg="grey"
      top="0"
      left="0"
      color="white"
      p="3"
    >
      <Text fontWeight="bold">{props.Day}</Text>
      <Text fontSize="xs">{props.Month}</Text>
      <Text fontSize="xs">{props.Year}</Text>
    </Box>
  );
}
