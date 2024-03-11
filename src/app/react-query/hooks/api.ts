import axios from "axios";

const TODO_URL = "http://localhost:9001/todo";
const delay = (delayMs: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayMs));
};

// Create a new instance.
const api = axios.create({
  baseURL: TODO_URL,
});

api.interceptors.request.use((config) => {
  return new Promise((resolve) => setTimeout(() => resolve(config), 1000));
});

export default api;
