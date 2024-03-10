import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { delay, TODO_URL } from "@/app/react-query/hooks/common";
import { Status } from "@/app/react-query/todo.dto";

const addToDoFn = async (body: ToDoAddRequestDto) => {
  if (!body.status) {
    body.status = Status.PENDING;
  }
  await delay(1000);
  return await axios.post(TODO_URL, body).then((res) => res.data);
};

export interface ToDoAddRequestDto {
  title: string;
  status?: Status;
}

export const useAddTodo = (options?: { onSuccess?: () => void }) => {
  const add = useMutation({
    mutationFn: addToDoFn,
    onSuccess: options?.onSuccess,
  });
  return add;
};
