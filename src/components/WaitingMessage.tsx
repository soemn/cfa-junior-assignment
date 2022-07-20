import { Center, Spinner, Text } from "@chakra-ui/react";

export default function WaitingMessage() {
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
}
