import Container from "@/app/(components)/Container";
import { useAtom } from "jotai";
import { count } from "@/app/jotai-rookie/store";

function Count() {
  const [c] = useAtom(count);
  return <Container>Count: {c}</Container>;
}

export default Count;
