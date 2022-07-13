import { Box, Center, IconButton, Button } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export function LeftButton() {
  return (
    <Center>
      <Box>
        <IconButton
          colorScheme="gray"
          variant="unstyled"
          aria-label="scroll left"
          color="white"
          icon={<ChevronLeftIcon />}
          _hover={{ color: "grey" }}
        />
      </Box>
    </Center>
  );
}

export function RightButton() {
  return (
    <Center>
      <Box>
        <IconButton
          colorScheme="gray"
          variant="unstyled"
          aria-label="scroll right"
          color="white"
          icon={<ChevronRightIcon />}
          _hover={{ color: "grey" }}
        />
      </Box>
    </Center>
  );
}

export function PageButton() {
  return (
    <Center>
      <Box boxSize="5">
        <Button
          fontSize="lg"
          colorScheme="gray"
          variant="unstyled"
          aria-label="scroll"
          color="gray"
          _hover={{ color: "pink.500" }}
        >
          ●
        </Button>
      </Box>
    </Center>
  );
}

export function ReadMoreButton() {
  return (
    <Button colorScheme="pink" size="sm" variant="solid" aria-label="read more">
      Read More
    </Button>
  );
}
