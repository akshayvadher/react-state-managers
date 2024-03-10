import React from "react";
import { Status, ToDoDto } from "@/app/react-query/todo.dto";
import { useQueryClient } from "@tanstack/react-query";
import { useToggleTodo } from "@/app/react-query/hooks/use-toggle-todo";

const ToDoToggle = ({ todo }: { todo: ToDoDto }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useToggleTodo({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const toggleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    mutate({ id: todo.id, status: isChecked ? Status.DONE : Status.PENDING });
  };
  return (
    <input
      type="checkbox"
      onChange={toggleHandler}
      disabled={isPending}
      className="disabled:bg-slat-400"
    />
  );
};

export default ToDoToggle;
