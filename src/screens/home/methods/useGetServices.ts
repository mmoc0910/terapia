import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";

export function useGetServices() {
  const result = useQuery({
    queryKey: ["SERVICE"],
    queryFn: FetchApi.getServices,
  });
  return result;
}
