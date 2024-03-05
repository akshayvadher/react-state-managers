"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Children } from "@/app/(components)/Container";
import { CountContext } from "@/app/context/countContext";

function CountProvider({ children }: Children) {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count, setDouble]);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const value = useMemo(() => {
    return { count, double, increment };
  }, [count, double]);
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

export default CountProvider;
