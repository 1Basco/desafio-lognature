import { Task } from "../../../app/contexts/tasks/types";

export interface TaskCardOptions {
  task: Task;
  onClickDeleteTask: (taskId: string) => Promise<void>;
}

export interface StatusColors {
  [key: number]: string;
}
export interface StatusText {
  [key: number]: string;
}
