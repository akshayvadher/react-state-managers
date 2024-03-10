export interface ToDoDto {
  id: number;
  title: string;
  status: Status;
}

export enum Status {
  DONE = "DONE",
  PENDING = "PENDING",
}
