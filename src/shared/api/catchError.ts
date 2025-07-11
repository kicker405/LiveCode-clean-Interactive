export async function tryCatchError<T>(asyncFunc: () => Promise<T>): Promise<T | undefined> {
  try {
    return await asyncFunc();
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

