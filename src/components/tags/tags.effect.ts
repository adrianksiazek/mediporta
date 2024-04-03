import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../hooks/use-debounce";
import { useSearchParams } from "react-router-dom";
import { TagsResponse } from "./tags.types";

const API_URL = "https://api.stackexchange.com/2.3/tags?site=stackoverflow";

export const useTagsTable = (): {
  data: TagsResponse | null;
  isLoading: boolean;
  rowsPerPage: string;
  isError: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
} => {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get("pagesize") || "5";
  const order = searchParams.get("order") || "desc";
  const sort = searchParams.get("sort") || "popular";
  const debouncedValue = useDebounce(pageSize, 500);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["tagsData", debouncedValue, order, sort],
    queryFn: () =>
      fetch(API_URL + `&pagesize=${debouncedValue}&order=${order}&sort=${sort}`).then((response) =>
        response.json()
      ),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 6000,
  });

  return { data, isLoading, rowsPerPage: pageSize, isError, error };
};
