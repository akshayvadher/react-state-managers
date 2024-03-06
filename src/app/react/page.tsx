"use client";

import React, { useState } from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/react/One";
import Two from "@/app/react/Two";
import Three from "@/app/react/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <H1>React</H1>
      <One count={count} />
      <Two setCount={setCount} />
      <Three count={count} />
    </Container>
  );
}

export default Page;
