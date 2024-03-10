import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { delay, TODO_URL } from "@/app/react-query/hooks/common";

const deleteTodoFn = async (id: number) => {
  await delay(1000);
  return await axios.delete(`${TODO_URL}/${id}`).then((res) => res.data);
};

export const useDelete = (options?: { onSuccess?: () => void }) => {
  const dlt = useMutation({
    mutationFn: deleteTodoFn,
    onSuccess: options?.onSuccess,
  });
  return dlt;
};
