import CalendarGuide from "../components/GuideWindows/CalendarGuide";
import HeaderGuide from "../components/GuideWindows/HeaderGuide";
import ReportsFiltersGuide from "../components/GuideWindows/ReportsFiltersGuide";
import ReportsGuide from "../components/GuideWindows/ReportsGuide";
import WellBoardGuide from "../components/GuideWindows/WellBoardGuide";
import WellCardGuide from "../components/GuideWindows/WellCardGuide";
import guideStore from "../stores/guideStore";

export default function RenderGuideContainer() {
  const { currentGuideWindow, canceledGuide } = guideStore();
  const renderCurrentStep = () => {
    if (!canceledGuide) {
      switch (currentGuideWindow) {
        case 0:
          return <HeaderGuide />;
        case 1:
          return <CalendarGuide />;
        case 2:
          return <WellCardGuide />;
        case 3:
          return <WellBoardGuide />;
        case 4:
          return <ReportsGuide />;
        case 5:
          return <ReportsFiltersGuide />;
        default:
          return null;
      }
    }
  };

  return <div>{renderCurrentStep()}</div>;
}
