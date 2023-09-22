import { useState } from "react";

export const useFetching = (callback: any): any => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e: any) {
      setError(e.massage);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
