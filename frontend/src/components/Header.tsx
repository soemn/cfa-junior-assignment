import React from "react";
import { Heading, Box, Divider, Text } from "@chakra-ui/react";

const Header: React.FC<{ content: string }> = (props) => {
  return (
    <Box mb={6}>
      <Heading mb={6} textAlign={"center"}>
        <Text>{props.content}</Text>
      </Heading>
      <Divider orientation="horizontal" />
    </Box>
  );
};

export default Header;
