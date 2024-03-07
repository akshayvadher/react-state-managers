import { useContext } from "react";
import Container from "@/app/(components)/Container";
import { CountContext } from "@/app/context/countContext";

function Count() {
  const { count } = useContext(CountContext);
  return <Container>Count: {count}</Container>;
}

export default Count;
