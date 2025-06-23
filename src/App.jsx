import "./App.css";
import Header from "./components/Header/Header";
import Report from "./components/Reports/Report";
import WellBoard from "./components/WellBoard/WellBoard";
import H2Component from "./components/H2Component/H2Component";
import Error from "./components/Error/Error";
import RenderGuide from "./components/RenderGuide";
import useCardData from "./hooks/useCardData";
import useReports from "./hooks/useReports";
import cardStore from "./stores/cardStore";
import reportStore from "./stores/reportStore";

export default function App() {
  const { reports, eventName, isReportError } = reportStore();
  const { cards, isCardError } = cardStore();
  const { selected, setSelected } = useCardData();

  useReports(selected);

  const selectedProjectName =
    selected && cards.find((card) => card.wellId === selected)?.projectName;

  return (
    <div className="App">
      <Header />
      <RenderGuide />
      <div className="app__h2">
        <H2Component>{selectedProjectName || "Харасавэйское ГКМ"}</H2Component>
      </div>
      <div className="app__wellBoard">
        {isCardError ? (
          <Error message={isCardError}></Error>
        ) : (
          <WellBoard
            cards={cards}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
      <div className="app__reports">
        {isReportError ? (
          <Error message={isReportError}></Error>
        ) : (
          <Report reports={reports} eventName={eventName} />
        )}
      </div>
    </div>
  );
}
