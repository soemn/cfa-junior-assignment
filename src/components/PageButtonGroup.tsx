import { Grid, Input, ButtonGroup, Center, Text } from "@chakra-ui/react";
import { PageLeftButton, PageRightButton } from "./Buttons";
import "../index.css";

export function PageButtonGroup({
  slides,
  range,
  setRange,
}: {
  slides: any;
  range: number;
  setRange: any;
}) {
  const allSlides = [...slides];
  const length = allSlides.length;
  const numOfPages = Math.floor(length / 3);

  function leftPage() {
    setRange(range <= 0 ? 0 : range - 3);
    // setPage(page === 1 ? page : page - 1);
  }

  function rightPage() {
    setRange(range >= length - 1 ? range : range + 3);
    // setPage(page === numOfPages ? page : page + 1);
  }

  return (
    <Grid display="flex" justifyContent="end" marginTop={"10px"}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Center color="gray">
          <Text marginRight={"10px"} fontSize={"sm"}>
            Page {Math.floor(range / 3) + 1} of {numOfPages}
          </Text>

          <PageLeftButton click={leftPage} />
          <Input
            textAlign={"center"}
            htmlSize={1}
            p={2}
            width="auto"
            size="sm"
            value={`${Math.floor(range / 3) + 1}`}
          />
          <PageRightButton click={rightPage} />
        </Center>
      </ButtonGroup>
    </Grid>
  );
}
