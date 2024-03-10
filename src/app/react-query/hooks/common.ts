export const delay = (delayMs: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
};

export const TODO_URL = "http://localhost:9001/todo";
