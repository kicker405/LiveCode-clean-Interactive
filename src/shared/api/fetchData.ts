export async function fetchData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Ошибка при запросе: ${response.status} ${response.statusText}`);
  }

  const text: string = await response.text();

  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Ошибка парсинга JSON: ${error}`);
  }
}
