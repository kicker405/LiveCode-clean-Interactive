import Window from "./WindowComponent/Window";
import { guideData } from "./GuideWindowsData/guideData";


export default function WellCardGuide() {
  const styles = {
    position: "absolute",
    top: "81%", 
    left: "13.5%", 
    transform: "translate(-50%, -50%)", 
    zIndex: 1000, 
  };

  return <div style={styles}><Window data={guideData.WellCard} /></div> ;
}