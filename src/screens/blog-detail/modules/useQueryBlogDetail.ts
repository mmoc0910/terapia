import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../../utils/FetchApi/FetchApi";
import { useParams } from "react-router";

export function useQueryBlogDetail() {
  const { blogId } = useParams();
  const result = useQuery({
    queryKey: ["BLOG", blogId],
    queryFn: () => FetchApi.getBlogDetail(blogId as string),
  });
  return result
}
