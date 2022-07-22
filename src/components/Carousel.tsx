import Header from "./Header";
import { LeftButton, RightButton } from "./Buttons";
import { useState } from "react";
import { PageButtonGroup } from "./PageButtonGroup";
import { Slider } from "./Slider";
import "../index.css";

export function Carousel({ slides }: { slides: any }) {
  const [range, setRange] = useState(0);
  const [page, setPage] = useState(1);
  const allSlides = [...slides];
  const length = allSlides.length;
  // const numOfPages = Math.ceil(length / 3);

  function nextItem() {
    //prevents movements once the item is within the last umbrella, if the last item is in the first position, prevent movement
    //flush left for last item for pages
    setRange(range >= length - 3 ? range : range + 1);
    // if new position is the 0 index of the frame, means its a new page (from remainder 2 to 0)
    const newPosition = (range + 1) % 3;

    if (range + 1 === length - 3 || newPosition === 0) {
      setPage(page + 1);
    }
  }

  function previousItem() {
    setRange(range <= 0 ? range : range - 1);
    const newPosition = (range - 1) % 3;
    if (range - 1 === length - 4 || newPosition === 2) {
      console.log("minus one page");
      setPage(page - 1);
    }
  }

  let divStyle = {
    transform: `translateX(calc(-${range} * (33.333% + 20px)))`,
  };

  return (
    <div className="full">
      <Header content={"Carousel with Data"} />
      <div className="container">
        <LeftButton click={previousItem} />
        <Slider style={divStyle} slides={slides} />
        <RightButton click={nextItem} />
      </div>

      <PageButtonGroup
        range={range}
        setRange={setRange}
        page={page}
        setPage={setPage}
        slides={slides}
      />
    </div>
  );
}
