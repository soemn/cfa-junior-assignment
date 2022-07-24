import { useEffect, useState } from "react";

export function useData<TData>(state: any, fetchPromise: () => Promise<TData>) {
  const [result, setResult] = useState<TData | null>(null);
  useEffect(() => {
    let ignore = false;
    fetchPromise().then((response) => {
      if (!ignore) {
        setResult(response);
      }
    });

    return () => {
      ignore = true;
    };
  }, [state]);

  return result;
}
