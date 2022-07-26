import React from "react";
import { Center, Spinner, Text } from "@chakra-ui/react";

const WaitingMessage: React.FC = () => {
  return (
    <Center display={"flex"} flexDirection={"column"}>
      <Text color={"pink.500"} marginBottom={"20px"} fontWeight={"bold"}>
        Loading
      </Text>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="pink.500"
        size="xl"
      />
    </Center>
  );
};

export default WaitingMessage;
