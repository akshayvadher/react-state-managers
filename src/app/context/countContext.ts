import { createContext } from "react";

export const CountContext = createContext({
  count: 0,
  double: 0,
  increment: () => {},
});
