"use client";

import Container from "@/app/(components)/Container";
import Count from "@/app/jotai-persist/Count";
import Inc from "@/app/jotai-persist/Inc";
import Double from "@/app/jotai-persist/Double";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai Persist</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

export default Page;
