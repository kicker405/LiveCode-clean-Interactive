import { Children, useRef } from "react";
import "./Slider.css";

export default function Slider({children}) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -365, behavior: "smooth" });
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 365, behavior: "smooth" });
    }
  };

  return (
    <div className="slider">
      <div className="cards-slider" ref={sliderRef}>
        <div className="cards-track">{children}</div>
      </div>
      <div className="scroll-btns">
        <button className="scroll-btn" onClick={scrollLeft}>
          ←
        </button>
        <button className="scroll-btn" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
}
