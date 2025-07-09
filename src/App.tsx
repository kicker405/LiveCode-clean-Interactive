import Header from '../src/components/Header/Header'
import GuideBeginning from '../src/components/TooltipGuide/GuideBeginning/GuideBeginning';
import RenderGuide from '../src/components/TooltipGuide/RenderGuide';
import H2Component from './components/H2Component/H2Component';
import WellBoard from './components/WellBoard/WellBoard';
import Report from './components/Reports/Report';
import Error from './components/Error/Error';
import { reportStore } from '../src/stores/reportStore'
import { cardStore } from '../src/stores/cardStore';
import useCardData from '../src/hooks/useCardData';
import useReports from '../src/hooks/useReports';

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
