import { Task } from "../../../../app/contexts/tasks/types";

export interface TaskFormValues {
  title: string;
  description: string;
  status: number;
}

export interface TaskFormOptions {
  onClick: (data: TaskFormValues) => Promise<any>;
  task?: Task;
}
