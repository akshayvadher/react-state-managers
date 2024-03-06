import React, { useEffect, useState } from "react";
import Container from "@/app/(components)/Container";

function Three({ count }: { count: number }) {
  const [double, setDouble] = useState(0);
  useEffect(() => {
    setDouble(count * 2);
  }, [count]);
  return <Container>Double: {double}</Container>;
}

export default Three;
