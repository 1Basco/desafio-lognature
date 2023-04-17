import { Task } from "../../../app/contexts/tasks/types";

export interface TaskCardOptions {
  task: Task;
}

export interface StatusColors {
  [key: number]: string;
}
export interface StatusText {
  [key: number]: string;
}
