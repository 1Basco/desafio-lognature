import { useCallback, useEffect, useState } from "react";
import { ToastProvider } from "../../../app/providers/toast.provider";
import { StorageProvider } from "../../../app/providers/storage.provider";
import { useTasks } from "../../../app/contexts/tasks/use-tasks.hook";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { Task } from "../../../app/contexts/tasks/types";
import { translate } from "../../../configuration/i18n.configuration";

function useListTasksController() {
  const toastProvider: ToastProvider = ToastProvider.Instance;
  const {
    state: tasksState,
    addTask,
    handleIsLoading,
    removeTask,
  } = useTasks();

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasksState.tasks);

  const onClickAddTask = useCallback(
    async (data: {
      title: string;
      description: string;
      status: number;
    }): Promise<Task> => {
      const newTaskId = uuidv4();

      const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
      const newTask = {
        id: newTaskId,
        title: data.title,
        description: data.description,
        status: data.status,
        createdAt: now,
      };
      try {
        await addTask(newTask);
        toastProvider.success(translate("common.task_added_successfully"));
      } catch (error: any) {
        console.error(error);
        toastProvider.error(error.message);
      }

      return newTask;
    },
    [tasksState.tasks]
  );

  const onFilterClick = useCallback(
    async (filter: string | number): Promise<void> => {
      if (filter === "all") {
        setFilteredTasks(tasksState.tasks);
      } else {
        setFilteredTasks(
          tasksState.tasks.filter((task) => task.status == filter)
        );
      }
    },
    [tasksState.tasks]
  );

  const onClickDeleteTask = useCallback(
    async (taskId: string) => {
      handleIsLoading(true);
      try {
        await removeTask(taskId);
        toastProvider.success(translate("common.task_deleted_successfully"));
      } catch (error: any) {
        console.error(error);
      } finally {
        handleIsLoading(false);
      }
    },
    [tasksState.tasks]
  );

  useEffect(() => {
    setFilteredTasks(tasksState.tasks);
  }, [tasksState.tasks]);

  return {
    onClickAddTask,
    onFilterClick,
    onClickDeleteTask,
    filteredTasks: filteredTasks,
  };
}

export default useListTasksController;
