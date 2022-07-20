import { Box, Center, Button } from "@chakra-ui/react";
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

export function PageButton({
  setRange,
  fill,
  id,
  slides,
}: {
  slides: any;
  setRange: any;
  fill: string;
  id: string;
}) {
  const allSlides = [...slides];
  const length = allSlides.length;
  const numOfPages = Math.ceil(length / 3);

  const changeRange = (event: React.MouseEvent<HTMLElement>) => {
    const buttonId = Number(event.currentTarget.id);

    setRange(
      buttonId === numOfPages - 1 ? length - 3 : buttonId + buttonId * 2
    );
  };

  return (
    <Center>
      <Box boxSize="5">
        <Button
          id={id}
          fontSize="lg"
          colorScheme="gray"
          variant="unstyled"
          aria-label="scroll"
          color={fill}
          _hover={{ color: "pink.500" }}
          onClick={changeRange}
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
