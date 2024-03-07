"use client";

import Container from "@/app/(components)/Container";
import Count from "@/app/jotai-worse/Count";
import Inc from "@/app/jotai-worse/Inc";
import Double from "@/app/jotai-worse/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai - worse</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
