"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "@/app/(components)/Container";

const CountContext = createContext({
  count: 0,
  double: 0,
  increment: () => {},
});

function CountProvider({ children }: Children) {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count, setDouble]);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <CountContext.Provider value={{ count, double, increment }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;
export const useCountContext = () => useContext(CountContext);
