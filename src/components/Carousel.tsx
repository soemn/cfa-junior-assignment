import { Heading, Grid, Box, Divider } from "@chakra-ui/react";
import { Section } from "./Section";
import { Card } from "./Card";
import { LeftButton, PageButton, RightButton } from "./Buttons";
import React, { useState } from "react";
// import { CarouselData } from "./CarouselData";

export function Carousel({ slides }: { slides: any }) {
  const [page, setPage] = useState(1);
  const allSlides = [...slides];
  const length = allSlides.length;
  const numOfPages = Math.ceil(length / 3);
  const pagesArray = [];
  for (let i = 0; i < numOfPages; i++) {
    pagesArray.push(i + 1);
  }

  function nextPage() {
    setPage(page === numOfPages ? page : page + 1);
  }

  function previousPage() {
    setPage(page === 1 ? page : page - 1);
  }

  if (!Array.isArray(allSlides) || length <= 0) {
    return null;
  }

  return (
    <Section>
      <Box mb={6}>
        <Heading mb={6} textAlign={"center"}>
          Carousel
        </Heading>
        <Divider orientation="horizontal" />
      </Box>
      <Grid
        display="flex"
        justifyContent="center"
        templateColumns="repeat(5,1fr)"
        gap={6}
      >
        <LeftButton click={previousPage} />
        {allSlides.map((slide: any, i: number) => {
          return (
            i < page * 3 &&
            i >= page * 3 - 3 && (
              <Card
                key={i}
                ImageAlt="Image"
                ImageSrc={slide.image}
                Header={slide.heading}
                Description={slide.description}
                Comments={slide.comments}
              />
            )
          );
        })}
        <RightButton click={nextPage} />
      </Grid>
      <Grid display="flex" justifyContent="center">
        {pagesArray.map((item: number, index: number) => {
          const changePage = () => {
            setPage(item);
          };
          return <PageButton key={index} click={changePage} />;
        })}
      </Grid>
    </Section>
  );
}
