import { useSearchParams } from "react-router-dom";

export const useOrder = () => {
  const [orderParams, setOrderParams] = useSearchParams();
  const order = orderParams.get("order");

  const setOrder = (value: string) => {
    setOrderParams((prev) => {
      prev.set("order", value);
      return prev;
    });
  };

  return { order, setOrder };
};
