import "./Window.css";
import WindowBtns from "../WindowBtns/WindowBtns"; 

export default function Window({data}) {
  return (
  <div className="window">
    <div className="window__content">
      <img src={data.elementImg} alt="" className="window__image"/>
      <h2 className="window__h2">{data.elementH2}</h2>
      <p className="window__text">
        {data.elementText}
      </p>
      <WindowBtns />
    </div>
  </div>
  )
}
