"use client";

import React, { useState } from "react";
import Container from "@/app/(components)/Container";
import Count from "@/app/react/Count";
import Inc from "@/app/react/Inc";
import Double from "@/app/react/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <H1>React</H1>
      <Count count={count} />
      <Double count={count} />
      <Inc setCount={setCount} />
    </Container>
  );
}

export default Page;
