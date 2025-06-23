import { useEffect } from "react";
import Window from "./WindowComponent/Window";
import { guideData } from "./GuideWindowsData/guideData";

export default function WellBoardGuide() {
  const styles = {
    position: "absolute",
    top: "89%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    zIndex: 1000, 
  };

  useEffect(() => {
  window.scrollBy({
    top: 120, 
    behavior: "smooth",
  });
}, []);

  return <div style={styles}><Window data={guideData.WellBoard} /></div> ;
}