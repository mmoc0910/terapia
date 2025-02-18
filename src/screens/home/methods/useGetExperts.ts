import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";

export function useGetExperts() {
  const result = useQuery({
    queryKey: ["EXPERT"],
    queryFn: FetchApi.getExperts,
  });
  return result;
}
