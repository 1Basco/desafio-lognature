import { useCallback } from "react";
import { ToastProvider } from "../../../app/providers/toast.provider";
import { StorageProvider } from "../../../app/providers/storage.provider";
import { useTasks } from "../../../app/contexts/tasks/use-tasks.hook";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

function useListTasksController() {
  const { state: tasksState, addTask } = useTasks();

  const onClickAddTask = useCallback(
    async (data: {
      title: string;
      description: string;
      status: number;
    }): Promise<void> => {
      const newTaskId = uuidv4();

      const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
      const newTask = {
        id: newTaskId,
        title: data.title,
        description: data.description,
        status: data.status,
        createdAt: now,
      };

      addTask(newTask);
    },
    [tasksState]
  );

  return {
    onClickAddTask,
  };
}

export default useListTasksController;
