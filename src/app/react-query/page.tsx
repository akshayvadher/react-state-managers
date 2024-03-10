import Container from "@/app/(components)/Container";
import ToDoList from "@/app/react-query/ToDoList";
import H1 from "@/app/(components)/H1";
import Summary from "@/app/react-query/Summary";

const Page = () => {
  return (
    <Container>
      <H1>ToDo List</H1>
      <Summary />
      <ToDoList />
    </Container>
  );
};

export default Page;
