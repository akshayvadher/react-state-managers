import React from "react";
import { useDelete } from "@/app/react-query/hooks/use-delete-todo";
import { ToDoDto } from "@/app/react-query/todo.dto";
import { useQueryClient } from "@tanstack/react-query";

const ToDoDelete = ({ todo }: { todo: ToDoDto }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useDelete({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const deleteHandler = () => {
    mutate(todo.id);
  };
  return (
    <button
      type="button"
      onClick={deleteHandler}
      disabled={isPending}
      className="disabled:pointer-events-none disabled:bg-slate-400"
    >
      ❌
    </button>
  );
};

export default ToDoDelete;
