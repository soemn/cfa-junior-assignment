import { Card } from "./Card";
import type { Article } from "../gateways/articles.dto";
import { Box } from "@chakra-ui/react";
import "../index.css";

interface SliderProps {
  slides: Article;
  style: { transform: string };
}

export const Slider: React.FC<SliderProps> = (props) => {
  const slidesSection = [...props.slides.posts];
  const length = props.slides.total;

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
    <div className="slider" style={props.style}>
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
};
