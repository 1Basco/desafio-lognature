import { Route, Routes } from "react-router-dom";
import { RouteConstants } from "../../app/constants/route.constants";
import TaskPage from "../../pages/public/task";
import Header from "../../resources/layout/header";
import ListTasksPage from "../../pages/public/list-tasks";

interface PublicRouterOptions {
  //
}

const PublicRouter = ({}: PublicRouterOptions): JSX.Element => {
  return (
    <>
      <Header />
      <div className="lg:px-24">
        <Routes>
          <Route path={RouteConstants.ROOT} element={<ListTasksPage />} />
          <Route path={RouteConstants.TASK} element={<TaskPage />} />
        </Routes>
      </div>
    </>
  );
};

export default PublicRouter;
