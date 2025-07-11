import '../styles/Error.css'
import { TError } from "../types/types";

export default function Error({ message }: TError) {
  return (
    <div className="error-container">
      <h2 className="error__h2">Ошибка</h2>
      <p className="error__message">{message || "Произошла неизвестная ошибка."}</p>
    </div>
  );
}
