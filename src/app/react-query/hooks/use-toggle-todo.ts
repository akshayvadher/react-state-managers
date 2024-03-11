import { useMutation } from "@tanstack/react-query";
import { Status } from "@/app/react-query/todo.dto";
import api from "@/app/react-query/hooks/api";

const toggleTodoFn = async (form: { id: number; status: Status }) => {
  return await api
    .patch(`/${form.id}`, { status: form.status })
    .then((res) => res.data);
};

export const useToggleTodo = (options?: { onSuccess?: () => void }) => {
  const toggle = useMutation({
    mutationFn: toggleTodoFn,
    onSuccess: options?.onSuccess,
  });
  return toggle;
};
