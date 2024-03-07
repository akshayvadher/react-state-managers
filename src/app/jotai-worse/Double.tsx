import { useEffect, useState } from "react";
import Container from "@/app/(components)/Container";
import { useAtom } from "jotai";
import { count } from "@/app/jotai-worse/store";

function Double() {
  const [c] = useAtom(count);
  const [double, setDouble] = useState(0);
  useEffect(() => {
    setDouble(c * 2);
  }, [c]);
  return <Container>Double: {double}</Container>;
}

export default Double;
