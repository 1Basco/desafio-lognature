export interface TaskCardOptions {
  title: string;
  description: string;
  status: number;
  taskId: string;
}

export interface StatusColors {
  [key: number]: string;
}
