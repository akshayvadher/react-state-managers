"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import Count from "@/app/redux/Count";
import Inc from "@/app/redux/Inc";
import Double from "@/app/redux/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Redux</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
