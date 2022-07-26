import { Flex, Input, ButtonGroup, Center, Text } from "@chakra-ui/react";
import { PageLeftRightButton } from "./Buttons";
import "../index.css";

export function PageButtonGroup({
  slides,
  index,
  setIndex,
  page,
  setPage,
  changeRange,
}: {
  slides: any;
  index: number;
  setIndex: any;
  page: number;
  setPage: any;
  changeRange: any;
}) {
  const length = slides.total;
  const numOfPages = Math.ceil(length / 3);

  function leftPage() {
    setPage(page === 1 ? page : page - 1);
    // if the page is the first page, then to not move left
    const newIndex = page <= 1 ? 0 : (page - 1) * 3 - 3;
    setIndex(newIndex);
    changeRange({
      lower: newIndex - 20 <= 0 ? 0 : newIndex - 20,
      upper: newIndex + 20 >= length ? length : newIndex + 20,
    });
  }

  function rightPage() {
    setPage(page === numOfPages ? page : page + 1);
    //if the page is the last page, to flush right for the cards
    const newIndex = page + 1 >= numOfPages ? length - 3 : (page + 1) * 3 - 3;
    setIndex(newIndex);
    changeRange({
      lower: newIndex - 20 <= 0 ? 0 : newIndex - 20,
      upper: newIndex + 20 >= length ? length : newIndex + 20,
    });
  }

  function changePage(event: React.ChangeEvent<HTMLInputElement>) {
    const newPage = Number(event.currentTarget.value);
    //if the inputted page is not beyond the listed range
    if (newPage > 0 && newPage <= numOfPages) {
      setPage(newPage);
      const newIndex = newPage === numOfPages ? length - 3 : newPage * 3 - 3;
      setIndex(newIndex);
      changeRange({
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
            Page {page} of {numOfPages}
          </Text>

          <PageLeftRightButton click={leftPage} isLeft={true} />
          <Input
            textAlign={"center"}
            htmlSize={1}
            p={2}
            width="auto"
            size="sm"
            value={page}
            onChange={changePage}
          />
          <PageLeftRightButton click={rightPage} isLeft={false} />
        </Center>
      </ButtonGroup>
    </Flex>
  );
}
