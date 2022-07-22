import { Grid, Input, ButtonGroup, Center, Text } from "@chakra-ui/react";
import { PageLeftButton, PageRightButton } from "./Buttons";
import "../index.css";

export function PageButtonGroup({
  slides,
  range,
  setRange,
  page,
  setPage,
}: {
  slides: any;
  range: number;
  setRange: any;
  page: number;
  setPage: any;
}) {
  const allSlides = [...slides];
  const length = allSlides.length;
  const numOfPages = Math.ceil(length / 3);

  function leftPage() {
    setPage(page === 1 ? page : page - 1);
    // if the page is the first page, then to not move left
    const newRange = page <= 1 ? 0 : (page - 1) * 3 - 3;
    setRange(newRange);
  }

  function rightPage() {
    setPage(page === numOfPages ? page : page + 1);
    //if the page is the last page, to flush right for the cards
    const newRange = page + 1 >= numOfPages ? length - 3 : (page + 1) * 3 - 3;
    setRange(newRange);
  }

  function changePage(event: React.ChangeEvent<HTMLInputElement>) {
    const newPage = Number(event.currentTarget.value);
    //if the inputted page is not beyond the listed range
    if (newPage > 0 && newPage <= numOfPages) {
      setPage(newPage);
      const newRange = newPage === numOfPages ? length - 3 : newPage * 3 - 3;
      setRange(newRange);
    } else {
      event.currentTarget.value = `${page}`;
    }
  }

  return (
    <Grid display="flex" justifyContent="end" marginTop={"10px"}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Center color="gray">
          <Text marginRight={"10px"} fontSize={"sm"}>
            Page {page} of {numOfPages}
          </Text>

          <PageLeftButton click={leftPage} />
          <Input
            textAlign={"center"}
            htmlSize={1}
            p={2}
            width="auto"
            size="sm"
            value={page}
            onChange={changePage}
          />
          <PageRightButton click={rightPage} />
        </Center>
      </ButtonGroup>
    </Grid>
  );
}
