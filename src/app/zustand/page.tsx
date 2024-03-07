"use client";

import Container from "@/app/(components)/Container";
import Count from "@/app/zustand/Count";
import Inc from "@/app/zustand/Inc";
import Double from "@/app/zustand/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Zustand</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
