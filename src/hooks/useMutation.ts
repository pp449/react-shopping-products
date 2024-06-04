import { ERROR_MESSAGES } from "@/constants/messages";
import useToast from "@/hooks/useToast";
import { useState } from "react";

const useMutation = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  mutationFunction: (...args: Parameters<T>) => ReturnType<T>,
  errorMessage?: string
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ReturnType<T>>();
  const { onAddToast } = useToast();

  const mutate = async (...args: Parameters<T>) => {
    try {
      setIsLoading(true);
      const res = await mutationFunction(...args);
      setData(res);
      return res;
    } catch (error) {
      const message = errorMessage ? errorMessage : ERROR_MESSAGES.default;
      onAddToast(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, data };
};

export default useMutation;
