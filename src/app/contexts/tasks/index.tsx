import { useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";
import { StorageConstants } from "../../constants/storage.constants";
import { StorageProvider } from "../../providers/storage.provider";
import { TasksContextConstants } from "./constants";
import { tasksReducer } from "./reducer";
import {
  Task,
  TasksContextOptions,
  TasksProviderOptions,
  TasksReducerOptions,
} from "./types";

export const TasksContext = createContext<TasksContextOptions>(
  {} as TasksContextOptions
);

export const tasksInitialState: TasksReducerOptions = {
  tasks: [],
  isLoading: false,
};

export const TasksProvider: React.FC<TasksProviderOptions> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState);

  const storageProvider: StorageProvider = StorageProvider.Instance;

  /**
   * Adds a task to the tasks context, and saves it to local storage.
   *
   * @param {Task} task - The task to add to the context.
   * @returns {Promise<void>} - Returns nothing.
   */
  const addTask = async (task: Task): Promise<void> => {
    dispatch({ type: TasksContextConstants.ADD_TASK, task, isLoading: true });

    const savedTasks = await storageProvider.getItem(StorageConstants.TASKS);

    const tasks = savedTasks ? savedTasks : [];

    storageProvider.setItem(
      StorageConstants.TASKS,
      JSON.stringify([...tasks, task])
    );
  };

  /**
   * Updates a task and saves it to storage.
   *
   * @param {Task} task - The task to update.
   * @return {Promise<void>} Nothing is returned.
   */
  const updateTask = async (task: Task): Promise<void> => {
    dispatch({
      type: TasksContextConstants.UPDATE_TASK,
      task,
      isLoading: true,
    });

    const savedTasks = await storageProvider.getItem(StorageConstants.TASKS);

    const updatedTasks = savedTasks.map((t: Task) =>
      t.id === task.id ? task : t
    );

    storageProvider.setItem(
      StorageConstants.TASKS,
      JSON.stringify(updatedTasks)
    );
  };

  /**
   * Removes a task with the given taskId from the storage and task list.
   *
   * @async
   * @param {Task} task - The task to update.
   * @return {Promise<void>} This function does not return anything.
   */
  const removeTask = async (task: Task): Promise<void> => {
    dispatch({
      type: TasksContextConstants.DELETE_TASK,
      task,
      isLoading: true,
    });

    const savedTasks = await storageProvider.getItem(StorageConstants.TASKS);

    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    const updatedTasks = tasks.filter((t: Task) => t.id !== task.id);

    await storageProvider.setItem(
      StorageConstants.TASKS,
      JSON.stringify(updatedTasks)
    );
  };

  const handleIsLoading = (isLoading: boolean): void => {
    dispatch({ type: TasksContextConstants.HANDLE_IS_LOADING, isLoading });
  };

  /**
   * @returns {void}
   */
  useEffect(() => {
    const getSavedTasks = async () => {
      handleIsLoading(true);
      const savedTasks = await storageProvider.getItem(StorageConstants.TASKS);

      if (savedTasks) {
        try {
          dispatch({
            type: TasksContextConstants.LOAD_TASKS,
            tasks: savedTasks,
            isLoading: true,
          });
        } catch (error) {
          console.error(error);
        } finally {
          handleIsLoading(false);
        }
      }
      handleIsLoading(false);
    };
    getSavedTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        state,
        addTask,
        updateTask,
        removeTask,
        handleIsLoading,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
