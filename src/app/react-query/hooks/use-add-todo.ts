import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "@/app/react-query/todo.dto";
import api from "@/app/react-query/hooks/api";

const addToDoFn = async (body: ToDoAddRequestDto) => {
  if (!body.status) {
    body.status = Status.PENDING;
  }
  return await api.post("", body).then((res) => res.data);
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
