import Window from "./WindowComponent/Window";
import { guideData } from "./GuideWindowsData/guideData";

export default function HeaderGuide() {
  const styles = {
    position: "absolute",
    top: "32%", 
    left: "79%", 
    transform: "translate(-50%, -50%)", 
    zIndex: 1000, 
  };

  return <div style={styles}><Window data={guideData.Header} /></div> ;
}
