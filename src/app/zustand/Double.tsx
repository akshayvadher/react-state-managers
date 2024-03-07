import Container from "@/app/(components)/Container";
import { useDouble } from "@/app/zustand/store";

function Double() {
  const c = useDouble();
  return <Container>Double: {c}</Container>;
}

export default Double;
