"use client";

import Container from "@/app/(components)/Container";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setCount]);
  return (
    <main>
      <Container>
        <Container>{count}</Container>
      </Container>
    </main>
  );
}
