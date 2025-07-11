export function handleCardDataError(error: unknown, setError: (msg: string) => void) {
  const typedError = error as Error;
  setError(`Ошибка при формировании данных карточек: ${typedError.message}`);
}
