import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";

export function useGetBlog() {
  const result = useQuery({ queryKey: ["BLOG"], queryFn: FetchApi.getBlog });
  return result;
}
