import { useSearchParams } from "react-router-dom";

export const useSort = () => {
  const [sortParams, setSortParams] = useSearchParams();
  const sort = sortParams.get("sort");

  const setSort = (value: string) => {
    setSortParams((prev) => {
      prev.set("sort", value);
      return prev;
    });
  };

  return { sort, setSort };
};
