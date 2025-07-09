export async function tryCatchError<T>(func: () => Promise<T>,onError?: (error: any) => void): Promise<T | void> {
  try {
    return await func();
  } catch (error: any) {
    onError?.(error);
  }
}
