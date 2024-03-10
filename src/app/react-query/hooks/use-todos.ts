import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ToDoDto } from "@/app/react-query/todo.dto";
import axios from "axios";
import { delay, TODO_URL } from "@/app/react-query/hooks/common";

const getTodosFn = async () => {
  await delay(1000);
  return await axios.get(TODO_URL).then((res) => res.data);
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
