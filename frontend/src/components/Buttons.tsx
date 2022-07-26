import { Box, Center, Button, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import "../index.css";

export function LeftRightButton({
  click,
  isLeft,
}: {
  click: any;
  isLeft: Boolean;
}) {
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
        {isLeft === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Box>
    </Center>
  );
}

export function PageLeftRightButton({
  click,
  isLeft,
}: {
  click: any;
  isLeft: Boolean;
}) {
  return (
    <IconButton
      variant={"unstyled"}
      aria-label="Move by one page"
      icon={isLeft === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      _hover={{ bg: "gray.100" }}
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
