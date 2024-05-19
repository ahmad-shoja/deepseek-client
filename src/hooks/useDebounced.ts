import { useCallback, useRef } from "react";

export function useDebounced<T>(callback: (arg: T) => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (arg: T) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(arg);
      }, delay);
    },
    [callback, delay],
  );
}
