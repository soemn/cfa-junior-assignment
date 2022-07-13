import { Heading, Grid, Box, Divider } from "@chakra-ui/react";
import { Section } from "./Section";
import { Card } from "./Card";
import { LeftButton, PageButton, RightButton } from "./Buttons";

export function Carousel() {
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
        <LeftButton />
        <Card
          ImageAlt="Image"
          ImageSrc="/image-1.jpg"
          Header="Finance and Legal"
          Description="Far Far Away, ........"
        />
        <Card
          ImageAlt="Image"
          ImageSrc="/image-1.jpg"
          Header="Finance and Legal"
          Description="Far Far Away, ........"
        />
        <Card
          ImageAlt="Image"
          ImageSrc="/image-1.jpg"
          Header="Finance and Legal"
          Description="Far Far Away, ........"
        />
        <RightButton />
      </Grid>
      <Grid display="flex" justifyContent="center">
        <PageButton />
        <PageButton />
      </Grid>
    </Section>
  );
}
