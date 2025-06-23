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

  const handleCardClick = (id) => {
    navigate(`/cards/${id}`); 
  };

  return (
    <div className="card-list">
      <Slider>
        <div className="cards-track">
          {cards.map((well) => (
            <Card
              key={well.wellId}
              well={well}
              isSelected={selected === well.wellId}
              onClick={(e) => {
                e.preventDefault()
                setEventName(null);
                setIsPlanReport(false);
                setSelected(well.wellId); 
                handleCardClick(well.wellId)
              }}
            />
          ))}
        </div>
      </Slider>
      <Calendar />
    </div>
  );
}
