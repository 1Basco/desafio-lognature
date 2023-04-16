import { Route, Routes } from "react-router-dom";
import { RouteConstants } from "../../app/constants/route.constants";
import TaskPage from "../../pages/public/task";
import Header from "../../resources/layout/header";
import ListTasksPage from "../../pages/public/list-tasks";
import { useTasks } from "../../app/contexts/tasks/use-tasks.hook";
import { Spinner } from "@chakra-ui/react";

interface PublicRouterOptions {
  //
}

const PublicRouter = ({}: PublicRouterOptions): JSX.Element => {
  const { state: stateTasks } = useTasks();
  return (
    <>
      {stateTasks.isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <>
          <Header />
          <div className="lg:px-24">
            <Routes>
              <Route path={RouteConstants.ROOT} element={<ListTasksPage />} />
              <Route path={RouteConstants.TASK} element={<TaskPage />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default PublicRouter;
