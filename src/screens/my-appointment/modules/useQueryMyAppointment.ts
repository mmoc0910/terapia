import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";

export function useQueryMyAppointment() {
    const result = useQuery({queryKey: ['MY_APPOINTMENT'], queryFn: FetchApi.getMyAppointment})
    return result
}