import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { translate } from "../../../configuration/i18n.configuration";
import { TaskForm } from "../../../resources/components/forms/task";
import Helmet from "../../../resources/components/helmet";
import useTaskController from "./task.controller";

export default function TaskPage(): JSX.Element {
  const { onClickUpdateTask, getTaskById, task } = useTaskController();
  const params = useParams();

  useEffect(() => {
    const getTask = async () => {
      if (params.taskId) {
        try {
          await getTaskById(String(params.taskId));
        } catch (error) {
          console.error(error);
        }
      }
    };
    getTask();
  }, [params]);

  return (
    <>
      <Helmet title={translate("app.task")} />
      <div className="w-full lg:w-6/12 p-4 lg:p-3 mt-4  m-auto">
        {task && <TaskForm task={task} onClick={onClickUpdateTask} />}
      </div>
    </>
  );
}
