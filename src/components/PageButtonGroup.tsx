import { Grid } from "@chakra-ui/react";
import { PageButton } from "./Buttons";

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
  const numOfPages = Math.ceil(length / 3);
  const pagesArray = [];
  for (let i = 0; i < numOfPages; i++) {
    pagesArray.push(i);
  }

  return (
    <Grid display="flex" justifyContent="center">
      {pagesArray.map((item: number, index: number) => {
        return (
          <PageButton
            slides={slides}
            key={index}
            id={`${index}`}
            fill={item === range ? "pink.500" : "gray"}
            setRange={setRange}
          />
        );
      })}
    </Grid>
  );
}
