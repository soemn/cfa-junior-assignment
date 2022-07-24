import Header from "./Header";
import { LeftButton, RightButton } from "./Buttons";
import { useState } from "react";
import { PageButtonGroup } from "./PageButtonGroup";
import { Slider } from "./Slider";
import "../index.css";

export function Carousel({
  slides,
  changeRange,
}: {
  slides: any;
  changeRange: any;
}) {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  const length = slides.total;

  // const numOfPages = Math.ceil(length / 3);

  function nextItem() {
    //prevents movements once the item is within the last umbrella, if the last item is in the first position, prevent movement
    //flush left for last item for pages
    setIndex(index >= length - 3 ? index : index + 1);
    // if new position is the 0 index of the frame, means its a new page (from remainder 2 to 0)
    const newPosition = (index + 1) % 3;
    if (index + 1 === length - 3 || newPosition === 0) {
      setPage(page + 1);
    }

    changeRange({
      lower: index - 20 <= 0 ? 0 : index - 20,
      upper: index + 20 >= length ? length : index + 20,
    });
  }

  function previousItem() {
    setIndex(index <= 0 ? index : index - 1);
    const newPosition = (index - 1) % 3;
    if (index - 1 === length - 4 || newPosition === 2) {
      setPage(page - 1);
    }
    changeRange({
      lower: index - 20 <= 0 ? 0 : index - 20,
      upper: index + 20 >= length ? length : index + 20,
    });
  }

  let divStyle = {
    transform: `translateX(calc(-${index} * (33.333% + 20px)))`,
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
        index={index}
        setIndex={setIndex}
        page={page}
        setPage={setPage}
        slides={slides}
        changeRange={changeRange}
      />
    </div>
  );
}
