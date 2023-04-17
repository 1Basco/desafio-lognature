import dayjs from "dayjs";
import { Task } from "../../../app/contexts/tasks/types";
import { TaskForm } from "../../../resources/components/forms/task";
import Helmet from "../../../resources/components/helmet";
import TaskCard from "../../../resources/components/task-card";
import TaskFilter from "../../../resources/components/task-filter";
import useListTasksController from "./list-tasks.controller";

export default function ListTasksPage(): JSX.Element {
  const { onClickAddTask, onFilterClick, filteredTasks } =
    useListTasksController();

  filteredTasks.forEach((task: Task) => {
    task.createdAt = dayjs(task.createdAt);
  });

  filteredTasks.sort((a: any, b: any) => b.createdAt - a.createdAt);

  return (
    <>
      <Helmet title={"Lista de tasks"} />

      <TaskFilter onFilter={onFilterClick} />

      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-8/12 lg:p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-3">
            {filteredTasks ? (
              filteredTasks.map((task: Task) => (
                <TaskCard key={task.id} task={task} />
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
