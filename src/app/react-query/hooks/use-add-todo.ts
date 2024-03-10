import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const add = useMutation({
    mutationFn: addToDoFn,
    onSuccess: options?.onSuccess,
    // When mutate is called:
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(["todos"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["todos"], (old: any) => [...old, newTodo]);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return add;
};
