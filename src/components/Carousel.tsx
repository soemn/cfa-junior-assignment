import { Grid } from "@chakra-ui/react";
import { Card } from "./Card";
import Header from "./Header";
import { LeftButton, PageButton, RightButton } from "./Buttons";
import { useState } from "react";
import "../index.css";

export function Carousel({ slides }: { slides: any }) {
  const [range, setRange] = useState(0);
  // const [style, setStyle] = useState({});
  const allSlides = [...slides];
  const length = allSlides.length;
  console.log(length);
  const numOfPages = Math.ceil(length / 3);
  const pagesArray = [];
  for (let i = 0; i < numOfPages; i++) {
    pagesArray.push(i);
  }

  function nextPage() {
    //prevents movements once the item is on the last page
    setRange(range === length - 3 ? range : range + 1);
  }

  function previousPage() {
    setRange(range === 0 ? range : range - 1);
  }

  if (!Array.isArray(allSlides) || length <= 0) {
    return null;
  }

  let divStyle = {
    transform: `translateX(${range * -33.33}%)`,
  };

  return (
    <div className="full">
      <Header content={"Carousel"} />
      <div className="container">
        <LeftButton click={previousPage} />
        <div className="slider" style={divStyle}>
          {allSlides.map((slide: any, i: number) => {
            return (
              <Card
                key={i}
                ImageAlt={slide.postTitle}
                ImageSrc={slide.postImgSrc}
                Header={slide.postTitle}
                Description={slide.postDescription}
                // Comments={slide.comments}
              />
            );
          })}
        </div>
        <RightButton click={nextPage} />
      </div>

      <Grid display="flex" justifyContent="center">
        {pagesArray.map((item: number, index: number) => {
          const changeRange = () => {
            setRange(item === numOfPages - 1 ? length - 3 : item + item * 2);
          };

          return (
            <PageButton
              key={index}
              fill={item === range ? "pink.500" : "gray"}
              click={changeRange}
            />
          );
        })}
      </Grid>
    </div>
  );
}
