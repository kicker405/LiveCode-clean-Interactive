import Card from "../Card/Card";
import Calendar from "../Calendar/Calendar";
import Slider from "../Slider/Slider";
import { useNavigate } from "react-router";
import cardStore from "../../stores/cardStore";

export default function WellBoard({selected, setSelected}) {
  const { cards, setEventName, setIsPlanReport } = cardStore();
  const navigate = useNavigate();

  if (cards.length === 0) {
    return <p>Данные загружаются...</p>;
  }

  const setOnClick = (wellId) => {
    setEventName(null);
    setIsPlanReport(false);
    setSelected(wellId); 
    navigate(`/cards/${wellId}`);
  }

  return (
    <div id="cardId" className="card-list">
      <Slider>
        <div className="cards-track">
          {cards.map((well) => (
            <Card
              key={well.wellId}
              well={well}
              isSelected={selected === well.wellId}
              onClick={(e) => {
                e.preventDefault()
                setOnClick(well.wellId)
              }}
            />
          ))}
        </div>
      </Slider>
      <Calendar />
    </div>
  );
}
