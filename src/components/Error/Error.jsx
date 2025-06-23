import "./Error.css";

export default function Error({ message }) {
  return (
    <div className="error-container">
      <h2 className="error__h2">Ошибка</h2>
      <p className="error__message">{message || "Произошла неизвестная ошибка."}</p>
    </div>
  );
}
