import { useContextSelector } from "use-context-selector";
import { Task, TasksContextOptions, TasksReducerActionOptions } from "./types";
import { TasksContext } from ".";

export function useTasks() {
  const state = useContextSelector(
    TasksContext,
    (tasks: TasksContextOptions) => tasks.state
  );
  //   const setIsLoading: (isLoading: boolean) => void = useContextSelector(
  //     TasksContext,
  //     (tasks: TasksContextOptions): ((isLoading: boolean) => void) =>
  //       tasks.setIsLoading
  //   );
  const addTask: (task: Task) => Promise<void> = useContextSelector(
    TasksContext,
    (tasks: TasksContextOptions): ((task: Task) => Promise<void>) =>
      tasks.addTask
  );

  const updateTask: (task: Task) => Promise<void> = useContextSelector(
    TasksContext,
    (tasks: TasksContextOptions): ((task: Task) => Promise<void>) =>
      tasks.updateTask
  );

  const removeTask: (task: Task) => Promise<void> = useContextSelector(
    TasksContext,
    (tasks: TasksContextOptions): ((task: Task) => Promise<void>) =>
      tasks.removeTask
  );

  return {
    state,
    addTask,
    updateTask,
    removeTask,
  };
}
