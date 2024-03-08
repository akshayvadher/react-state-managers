import Container from "@/app/(components)/Container";
import { useCountContext } from "@/app/context/CountProvider";

function Double() {
  const { double } = useCountContext();
  return <Container>Double: {double}</Container>;
}

export default Double;
