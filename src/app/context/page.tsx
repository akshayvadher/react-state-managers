"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import Count from "@/app/context/Count";
import Inc from "@/app/context/Inc";
import Double from "@/app/context/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>React Context</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
