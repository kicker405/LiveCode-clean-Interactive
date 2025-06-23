import React, { useEffect } from "react";
import Window from "./WindowComponent/Window";
import { guideData } from "./GuideWindowsData/guideData";

export default function ReportsGuide() {
  const styles = {
    position: "absolute",
    top: "114%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  };

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return <div style={styles}><Window data={guideData.Reports} /></div> ;
}
