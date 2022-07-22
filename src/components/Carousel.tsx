import Header from "./Header";
import { LeftButton, RightButton } from "./Buttons";
import { useState } from "react";
import { PageButtonGroup } from "./PageButtonGroup";
import { Slider } from "./Slider";
import "../index.css";

export function Carousel({ slides }: { slides: any }) {
  const [range, setRange] = useState(0);
  const allSlides = [...slides];
  const length = allSlides.length;

  function nextItem() {
    //prevents movements once the item is on the last page
    setRange(range === length - 3 ? range : range + 1);
  }

  function previousItem() {
    setRange(range === 0 ? range : range - 1);
  }

  if (!Array.isArray(allSlides) || length <= 0) {
    return null;
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

      <PageButtonGroup range={range} setRange={setRange} slides={slides} />
    </div>
  );
}
