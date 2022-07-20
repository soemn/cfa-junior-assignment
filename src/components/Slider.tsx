import { Card } from "./Card";
import "../index.css";

export function Slider({ slides, style }: { slides: any; style: any }) {
  const allSlides = [...slides];
  const length = allSlides.length;

  if (!Array.isArray(allSlides) || length <= 0) {
    return null;
  }

  return (
    <div className="slider" style={style}>
      {allSlides.map((slide: any, i: number) => {
        return (
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
