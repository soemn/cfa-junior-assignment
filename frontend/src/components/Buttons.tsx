import React from "react";
import { Box, Center, Button, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import "../index.css";

interface ButtonProps {
  click: any;
  isLeft: Boolean;
}

export const LeftRightButton: React.FC<ButtonProps> = (props) => {
  return (
    <Center>
      <Box
        className="handle"
        as="button"
        onClick={props.click}
        _hover={{ color: "grey" }}
        color="white"
        h={"100%"}
        fontSize="2xl"
      >
        {props.isLeft === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Box>
    </Center>
  );
};

export const PageLeftRightButton: React.FC<ButtonProps> = (props) => {
  return (
    <IconButton
      variant={"unstyled"}
      aria-label="Move by one page"
      icon={props.isLeft === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      _hover={{ bg: "gray.100" }}
      size={"md"}
      onClick={props.click}
    />
  );
};

export const ReadMoreButton: React.FC = () => {
  return (
    <Button colorScheme="pink" size="sm" variant="solid" aria-label="read more">
      Read More
    </Button>
  );
};
