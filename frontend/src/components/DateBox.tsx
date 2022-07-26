import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface DateInformationProps {
  Day: string;
  Month: string;
  Year: string;
}

const DateBox: React.FC<DateInformationProps> = (props) => {
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
};

export default DateBox;
