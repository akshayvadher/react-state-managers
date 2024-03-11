import { useMutation } from "@tanstack/react-query";
import api from "@/app/react-query/hooks/api";

const deleteTodoFn = async (id: number) => {
  return await api.delete(`/${id}`).then((res) => res.data);
};

export const useDelete = (options?: { onSuccess?: () => void }) => {
  const dlt = useMutation({
    mutationFn: deleteTodoFn,
    onSuccess: options?.onSuccess,
  });
  return dlt;
};
