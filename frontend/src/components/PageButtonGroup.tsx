import React from "react";
import { Flex, Input, ButtonGroup, Center, Text } from "@chakra-ui/react";
import { PageLeftRightButton } from "./Buttons";
import type { Article } from "../gateways/articles.dto";
import "../index.css";

interface PageButtonGroupProps {
  slides: Article;
  index: number;
  setIndex: Function;
  page: number;
  setPage: Function;
  changeRange: ({ lower, upper }: { lower: number; upper: number }) => void;
}

export const PageButtonGroup: React.FC<PageButtonGroupProps> = (props) => {
  const length = props.slides.total;
  const numOfPages = Math.ceil(length / 3);

  function leftPage(): void {
    const page = props.page;
    props.setPage(page === 1 ? page : page - 1);
    // if the page is the first page, then to not move left
    const newIndex = page <= 1 ? 0 : (page - 1) * 3 - 3;
    props.setIndex(newIndex);
    props.changeRange({
      lower: newIndex - 20 <= 0 ? 0 : newIndex - 20,
      upper: newIndex + 20 >= length ? length : newIndex + 20,
    });
  }

  function rightPage(): void {
    const page = props.page;
    props.setPage(page === numOfPages ? page : page + 1);
    //if the page is the last page, to flush right for the cards
    const newIndex = page + 1 >= numOfPages ? length - 3 : (page + 1) * 3 - 3;
    props.setIndex(newIndex);
    props.changeRange({
      lower: newIndex - 20 <= 0 ? 0 : newIndex - 20,
      upper: newIndex + 20 >= length ? length : newIndex + 20,
    });
  }

  function changePage(event: React.ChangeEvent<HTMLInputElement>): void {
    const newPage = Number(event.currentTarget.value);
    //if the inputted page is not beyond the listed range
    if (newPage > 0 && newPage <= numOfPages) {
      props.setPage(newPage);
      const newIndex = newPage === numOfPages ? length - 3 : newPage * 3 - 3;
      props.setIndex(newIndex);
      props.changeRange({
        lower: newIndex - 20 <= 0 ? 0 : newIndex - 20,
        upper: newIndex + 20 >= length ? length : newIndex + 20,
      });
    }
  }

  return (
    <Flex justifyContent="end" alignItems={"stretch"} marginTop={"10px"}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Center color="gray">
          <Text marginRight={"10px"} fontSize={"sm"}>
            Page {props.page} of {numOfPages}
          </Text>

          <PageLeftRightButton click={leftPage} isLeft={true} />
          <Input
            textAlign={"center"}
            htmlSize={1}
            p={2}
            width="auto"
            size="sm"
            value={props.page}
            onChange={changePage}
          />
          <PageLeftRightButton click={rightPage} isLeft={false} />
        </Center>
      </ButtonGroup>
    </Flex>
  );
};
