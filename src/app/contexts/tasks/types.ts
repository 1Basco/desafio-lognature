export interface TasksContextOptions {
  state: TasksReducerOptions;
  addTask: (data: Task) => Promise<void>;
  updateTask: (data: Task) => Promise<void>;
  removeTask: (data: Task) => Promise<void>;
  handleIsLoading: (isLoading: boolean) => void;
}

export interface TasksProviderOptions {
  children: JSX.Element | JSX.Element[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: number;
  createdAt: any;
}

export interface TasksReducerOptions {
  isLoading: boolean;
  tasks: Array<Task>;
}

export type TasksReducerActionOptions =
  | {
      type: "LOAD_TASKS";
      tasks: Array<Task>;
      isLoading: boolean;
    }
  | {
      type: "ADD_TASK";
      task: Task;
      isLoading: boolean;
    }
  | {
      type: "UPDATE_TASK";
      task: Task;
      isLoading: boolean;
    }
  | {
      type: "DELETE_TASK";
      task: Task;
      isLoading: boolean;
    }
  | {
      type: "HANDLE_IS_LOADING";
      isLoading: boolean;
    };
