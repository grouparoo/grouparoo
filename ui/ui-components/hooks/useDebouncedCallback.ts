import { useCallback, useEffect, useRef } from "react";

export const useDebouncedCallback = (callback: () => void, ms: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return useCallback(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(callback, ms);
  }, [callback, ms]);
};
