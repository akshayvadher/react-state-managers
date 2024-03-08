"use client";

import Container from "@/app/(components)/Container";
import Count from "@/app/jotai-rookie/Count";
import Inc from "@/app/jotai-rookie/Inc";
import Double from "@/app/jotai-rookie/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai - Rookie</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
