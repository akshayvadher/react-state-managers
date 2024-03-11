import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ToDoDto } from "@/app/react-query/todo.dto";
import api from "@/app/react-query/hooks/api";

const getTodosFn = async () => {
  return await api.get("").then((res) => res.data);
};

const TODOS_KEY = "todos";
export const useTodos = () => {
  const queryClient = useQueryClient();
  const todos = useQuery<ToDoDto[]>({
    queryKey: [TODOS_KEY],
    queryFn: getTodosFn,
  });
  const markForRefetch = () => {
    queryClient.invalidateQueries({ queryKey: [TODOS_KEY] });
  };
  return { ...todos, markForRefetch };
};
