// src/hooks/useLoadingError.ts
import { useState, useCallback } from "react";

type AsyncFunction<T> = () => Promise<T>;

export const useLoadingError = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (asyncFunction: AsyncFunction<T>): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        const result = await asyncFunction();
        return result;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, execute };
};
