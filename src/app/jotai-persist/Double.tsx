import Container from "@/app/(components)/Container";
import { useDouble } from "@/app/jotai-persist/store";

function Double() {
  const c = useDouble();
  return <Container>Double: {c}</Container>;
}

export default Double;
