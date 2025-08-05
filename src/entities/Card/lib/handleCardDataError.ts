export function handleCardDataError(error: unknown, setError: (msg: string) => void) {
  if (error instanceof Error) {
    setError(`Ошибка при формировании данных карточек: ${error.message}`);
  } else {
    setError('Неизвестная ошибка при формировании данных карточек');
  }
}
