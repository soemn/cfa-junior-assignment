import { Heading, Box, Divider, Text } from "@chakra-ui/react";

export default function Header({ content }: { content: string }) {
  return (
    <Box mb={6}>
      <Heading mb={6} textAlign={"center"}>
        <Text>{content}</Text>
      </Heading>
      <Divider orientation="horizontal" />
    </Box>
  );
}
