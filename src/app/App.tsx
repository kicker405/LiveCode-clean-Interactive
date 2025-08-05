import { Header, WellBoard, Report, Error }  from '../widgets'
import { GuideBeginning, RenderGuide } from '../features/TooltipGuide'
import { H2Component } from '../shared/ui';
import { reportStore, cardStore } from '../shared/models';
import useCardData from '../entities/Card/models/useCardData';
import useReports from '../widgets/Reports/models/useReports';
import ThermometerChart from '../shared/ui/Charts/ui/ThermometerChart';

export default function App() {
  const { isReportError } = reportStore();
  const { cards, isCardError } = cardStore();
  const { selected, setSelected } = useCardData();

  useReports(selected);

  const selectedProjectName = selected ? cards.find((card) => card.wellId === selected)?.projectName : undefined;

  return (
    <div className="App">
      {/* <ThermometerChart /> */}
      <Header />
      <GuideBeginning />
      <RenderGuide />
      <div className="app__h2">
        <H2Component>{selectedProjectName || "Харасавэйское ГКМ"}</H2Component>
      </div>
      <div className="app__wellBoard">
        {isCardError ? (
          <Error message={isCardError} />
        ) : (
          <WellBoard selected={selected} setSelected={setSelected} />
        )}
      </div>
      <div className="app__reports">
        {isReportError ? (
          <Error message={isReportError} />
        ) : (
          <Report/>
        )}
      </div>
    </div>
  );
}
