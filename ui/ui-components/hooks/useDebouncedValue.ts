import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(value: T, ms: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => {
      clearTimeout(handler);
    };
  }, [value, ms]);

  return debouncedValue;
};
