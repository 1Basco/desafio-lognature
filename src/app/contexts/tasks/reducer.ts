import { TasksContextConstants } from "./constants";
import { TasksReducerActionOptions, TasksReducerOptions } from "./types";

export const tasksReducer = (
  prevState: TasksReducerOptions,
  action: TasksReducerActionOptions
): TasksReducerOptions => {
  switch (action.type) {
    case TasksContextConstants.ADD_TASK:
      return {
        ...prevState,
        tasks: [...prevState.tasks, action.task],
        isLoading: false,
      };

    case TasksContextConstants.UPDATE_TASK:
      const updatedTaskIndex = prevState.tasks.findIndex(
        (task) => task.id === action.task.id
      );
      const updatedTasks = [...prevState.tasks];
      updatedTasks[updatedTaskIndex] = action.task;
      return {
        ...prevState,
        tasks: updatedTasks,
        isLoading: action.isLoading,
      };

    case TasksContextConstants.LOAD_TASKS:
      return {
        ...prevState,
        tasks: action.tasks,
        isLoading: action.isLoading,
      };

    case TasksContextConstants.DELETE_TASK:
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== action.taskId),
        isLoading: false,
      };

    case TasksContextConstants.HANDLE_IS_LOADING:
      return {
        ...prevState,
        isLoading: action.isLoading,
      };

    default:
      return prevState;
  }
};
