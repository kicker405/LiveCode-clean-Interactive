import { useRef } from "react";
import "./Slider.css";

export default function Slider({children}) {
  const sliderRef = useRef(null);

  function scroll(type) {
    if (! sliderRef.current) return
    sliderRef.current.scrollBy({ left: (type === "right" ? 365 : -365), behavior: "smooth" });
  }

  return (
    <div id="wellBoardId" className="slider">
      <div className="cards-slider" ref={sliderRef}>
        <div className="cards-track">{children}</div>
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
