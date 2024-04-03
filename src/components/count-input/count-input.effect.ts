import { useSearchParams } from "react-router-dom";

export const useCountInput = () => {
  const [pageSizeParams, setPageSizeParams] = useSearchParams();
  const pageSize = pageSizeParams.get("pagesize");

  const setPageSize = (value: string) => {
    setPageSizeParams((prev) => {
      prev.set("pagesize", value);
      return prev;
    });
  };

  return { pageSize, setPageSize };
};
