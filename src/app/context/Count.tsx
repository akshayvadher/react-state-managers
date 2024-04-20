import Container from "@/app/(components)/Container";
import { useCountContext } from "@/app/context/CountProvider";

function Count() {
  const { count } = useCountContext();

  return <Container>Count: {count}</Container>;
}

export default Count;
