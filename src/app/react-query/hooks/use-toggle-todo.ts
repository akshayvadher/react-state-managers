import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { delay, TODO_URL } from "@/app/react-query/hooks/common";
import { Status } from "@/app/react-query/todo.dto";

const toggleTodoFn = async (form: { id: number; status: Status }) => {
  await delay(1000);
  return await axios
    .patch(`${TODO_URL}/${form.id}`, { status: form.status })
    .then((res) => res.data);
};

export const useToggleTodo = (options?: { onSuccess?: () => void }) => {
  const toggle = useMutation({
    mutationFn: toggleTodoFn,
    onSuccess: options?.onSuccess,
  });
  return toggle;
};
