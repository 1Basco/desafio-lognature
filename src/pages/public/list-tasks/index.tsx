import dayjs from "dayjs";
import { Task } from "../../../app/contexts/tasks/types";
import { useTasks } from "../../../app/contexts/tasks/use-tasks.hook";
import { TaskForm } from "../../../resources/components/forms/task";
import Helmet from "../../../resources/components/helmet";
import TaskCard from "../../../resources/components/task-card";
import useListTasksController from "./list-tasks.controller";

export default function ListTasksPage(): JSX.Element {
  const { onClickAddTask } = useListTasksController();
  const { state: stateTasks } = useTasks();

  stateTasks.tasks.forEach((task: Task) => {
    task.createdAt = dayjs(task.createdAt);
  });

  // Sort tasks by createdAt
  stateTasks.tasks.sort((a: any, b: any) => b.createdAt - a.createdAt);
  return (
    <>
      <Helmet title={"Lista de tasks"} />

      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-8/12 lg:p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3">
            {stateTasks ? (
              stateTasks.tasks.map((task: Task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  taskId={task.id}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/12 p-4 lg:p-3 mt-4">
          <TaskForm onClick={onClickAddTask} />
        </div>
      </div>
    </>
  );
}
