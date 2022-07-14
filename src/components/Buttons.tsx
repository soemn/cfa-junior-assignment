import { Box, Center, IconButton, Button, Icon } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export function LeftButton({ click }: { click: any }) {
  return (
    <Center>
      <Box
        as="button"
        onClick={click}
        _hover={{ color: "grey" }}
        color="white"
        h={"100%"}
        fontSize="2xl"
      >
        <ChevronLeftIcon />
      </Box>
    </Center>
  );
}

export function RightButton({ click }: { click: any }) {
  return (
    <Center>
      <Box
        as="button"
        onClick={click}
        _hover={{ color: "grey" }}
        color="white"
        h={"100%"}
        fontSize="2xl"
      >
        <ChevronRightIcon />
      </Box>
    </Center>
  );
}

export function PageButton({ click, fill }: { click: any; fill: string }) {
  return (
    <Center>
      <Box boxSize="5">
        <Button
          fontSize="lg"
          colorScheme="gray"
          variant="unstyled"
          aria-label="scroll"
          color={fill}
          _hover={{ color: "pink.500" }}
          onClick={click}
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
