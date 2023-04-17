import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../../app/constants/route.constants";
import { Task } from "../../../app/contexts/tasks/types";
import { useTasks } from "../../../app/contexts/tasks/use-tasks.hook";
import { ToastProvider } from "../../../app/providers/toast.provider";

function useTaskController() {
  const toastProvider: ToastProvider = ToastProvider.Instance;
  const navigate = useNavigate();

  const { state: tasksState, updateTask, handleIsLoading } = useTasks();
  const [task, setTask] = useState<Task>();

  const handleNavigation = useCallback(() => {
    navigate(RouteConstants.ROOT);
  }, []);

  const getTaskById = useCallback(
    async (taskId: string): Promise<void> => {
      let taskData;
      try {
        taskData = tasksState.tasks.find((task: Task) => task.id === taskId);
        if (taskData) {
          setTask(taskData);
        } else {
          toastProvider.error(`Task with id ${taskId} not found`);
          handleNavigation();
        }
        setTask(taskData);
      } catch (error) {
        throw new Error(`Task with id ${taskId} not found`);
      }
    },
    [tasksState.tasks]
  );

  const onClickUpdateTask = useCallback(
    async (taskData: Task) => {
      if (task) {
        let taskUpdated = {
          ...task,
          title: taskData.title,
          description: taskData.description,
          status: taskData.status,
        };
        try {
          await updateTask(taskUpdated);
          toastProvider.success("Task updated successfully");
        } catch (error: any) {
          toastProvider.error(error.message);
        } finally {
          handleIsLoading(false);
        }
      }
    },
    [task]
  );

  return {
    getTaskById,
    onClickUpdateTask,
    task: task,
  };
}

export default useTaskController;
