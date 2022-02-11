import { useCallback, useEffect, useRef } from "react";

export const useDebouncedCallback = (
  callback: (...args: any[]) => void,
  ms: number
) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return useCallback(
    (...args: any[]) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => callback(...args), ms);
    },
    [callback, ms]
  );
};
