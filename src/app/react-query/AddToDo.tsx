import React, { FormEvent, useState } from "react";
import Container from "@/app/(components)/Container";
import { useAddTodo } from "@/app/react-query/hooks/use-add-todo";

const AddToDo = () => {
  const [value, setValue] = useState("");
  const { mutate, isPending } = useAddTodo();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    mutate({ title: value });
    setValue("");
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          required
          value={value}
          onChange={onChange}
          disabled={isPending}
          className="p-1 border-2 disabled:bg-slate-200"
        />
        <button
          type="submit"
          className="p-1 border-2 hover:bg-cyan-500 bg-cyan-400 disabled:bg-slate-200"
          disabled={isPending}
        >
          Add
        </button>
      </form>
    </Container>
  );
};

export default AddToDo;
