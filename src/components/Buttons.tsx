import { Box, Center, Button, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import "../index.css";

export function LeftButton({ click }: { click: any }) {
  return (
    <Center>
      <Box
        className="handle"
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
        className="handle"
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

export function PageLeftButton({ click }: { click: any }) {
  return (
    <IconButton
      variant={"unstyled"}
      aria-label="Add to friends"
      icon={<ChevronLeftIcon />}
      size={"md"}
      onClick={click}
    />
  );
}
export function PageRightButton({ click }: { click: any }) {
  return (
    <IconButton
      variant={"unstyled"}
      aria-label="Add to friends"
      icon={<ChevronRightIcon />}
      size={"md"}
      onClick={click}
    />
  );
}

export function ReadMoreButton() {
  return (
    <Button colorScheme="pink" size="sm" variant="solid" aria-label="read more">
      Read More
    </Button>
  );
}
