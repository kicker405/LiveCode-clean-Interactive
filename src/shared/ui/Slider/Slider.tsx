import "./Slider.css";
import { JSX } from "react";
import { useRef } from "react";
import { IChildrenProps } from "../../models/types/common";

export function Slider({children}: IChildrenProps<JSX.Element>) {
  const sliderRef = useRef<HTMLDivElement>(null);

  function scroll(type: string) {
    if (! sliderRef.current) return
    sliderRef.current.scrollBy({ left: (type === "right" ? 365 : -365), behavior: "smooth" });
  }

  return (
    <div id="wellBoardId" className="slider">
      <div className="cards-slider" ref={sliderRef}>
        <div id="cardId" className="cards-track">{children}</div>
      </div>
      <div className="scroll-btns">
        <button className="scroll-btn" onClick={() => scroll("left")}>
          ←
        </button>
        <button className="scroll-btn" onClick={() => scroll("right")}>
          →
        </button>
      </div>
    </div>
  );
}
