import axios from "axios";
import { useState } from "react";

export const useFetching = (
  callback: any
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
