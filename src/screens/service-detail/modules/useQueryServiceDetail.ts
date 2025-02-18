import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";

export function useQueryServiceDetail() {
  const { serviceId } = useParams();
  const result = useQuery({
    queryKey: ["SERVICE", serviceId],
    queryFn: () => FetchApi.getServiceDetail(serviceId as string),
  });
  return result;
}
