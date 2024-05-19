import { useCallback, useRef } from "react";

export function useDebounced(callback: (value: string) => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (value: string) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );
}
