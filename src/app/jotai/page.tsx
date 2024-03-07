"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import Count from "@/app/jotai/Count";
import Inc from "@/app/jotai/Inc";
import Double from "@/app/jotai/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
