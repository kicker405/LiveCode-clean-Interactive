export const tryCatchError = async <T>(tryFn: () => Promise<T>, catchFn: (error: unknown) => void): Promise<T | void> => {
  try {
    return await tryFn();
  } catch (error) {
    catchFn(error);
  }
};