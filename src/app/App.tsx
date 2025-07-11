import Header from '../widgets/Header/Header'
import GuideBeginning from '../features/TooltipGuide/ui/GuideBeginning/GuideBeginning';
import RenderGuide from '../features/TooltipGuide/lib/RenderGuide';
import H2Component from '../shared/ui/H2Component/H2Component';
import WellBoard from '../widgets/WellBoard/ui/WellBoard';
import Report from '../widgets/Reports/ui/Report';
import Error from '../widgets/Error/ui/Error';
import { reportStore } from '../shared/models/stores/reportStore'
import { cardStore } from '../shared/models/stores/cardStore';
import useCardData from '../entities/Card/models/useCardData';
import useReports from '../widgets/Reports/models/useReports';

export default function App() {
  const { isReportError } = reportStore();
  const { cards, isCardError } = cardStore();
  const { selected, setSelected } = useCardData();

  useReports(selected);

  const selectedProjectName = selected ? cards.find((card) => card.wellId === selected)?.projectName : undefined;

  return (
    <div className="App">
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
