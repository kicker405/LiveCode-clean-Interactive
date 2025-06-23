import Window from "./WindowComponent/Window";
import { guideData } from "./GuideWindowsData/guideData";

export default function CalendarGuide() {
  const styles = {
    position: "absolute",
    top: "80%", 
    left: "80%", 
    transform: "translate(-50%, -50%)", 
    zIndex: 1000, 
  };

  return <div style={styles}><Window  data={guideData.Calendar} /></div> ;
}