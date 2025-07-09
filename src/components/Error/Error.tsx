import "./Error.css";
import { TError } from "../../types/components/error";

export default function Error({ message }: TError) {
  return (
    <div className="error-container">
      <h2 className="error__h2">Ошибка</h2>
      <p className="error__message">{message || "Произошла неизвестная ошибка."}</p>
    </div>
  );
}
