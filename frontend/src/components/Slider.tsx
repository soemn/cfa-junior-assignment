import { Card } from "./Card";
import { Box } from "@chakra-ui/react";
import "../index.css";

export function Slider({ slides, style }: { slides: any; style: any }) {
  const slidesSection = [...slides.posts];
  const length = slides.total;

  if (!Array.isArray(slidesSection) || length <= 0) {
    return null;
  }

  const allSlides = new Array(length);
  allSlides.fill("");
  slidesSection.forEach((element) => {
    const index = Number(element.id - 1);
    allSlides[index] = element;
  });

  return (
    <div className="slider" style={style}>
      {allSlides.map((slide: any, i: number) => {
        return slide === "" ? (
          <Box className="section" key={i} />
        ) : (
          <Card
            key={i}
            ImageAlt={slide.postTitle}
            ImageSrc={slide.postImgSrc}
            Header={slide.postTitle}
            Description={slide.postDescription}
          />
        );
      })}
    </div>
  );
}
