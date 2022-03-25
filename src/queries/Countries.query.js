import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "./Axios";

export default function usePosts() {
  const { isLoading, error, data } = useQuery(
    "postsData",
    async () => await axios.get("/posts")
  );
  return {
    isLoading,
    error,
    data
  };
}

export function usePost(id) {
  const { isLoading, error, data } = useQuery(
    "postData",
    async () => await axios.get(`/posts/${id}`)
  );

  return {
    isLoading,
    error,
    data
  };
}

export function useUpdatePost(id, data) {
  const queryClient = useQueryClient();
  const { isLoading, isError: error, isSuccess, mutate } = useMutation(
    (rec) => axios.put(`/posts/${id}`, rec),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("postData");
      }
    }
  );
  return {
    isLoading,
    error,
    isSuccess,
    data,
    mutate
  };
}
