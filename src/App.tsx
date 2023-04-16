import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRouter from "./routes/public";
import { ChakraProvider } from "@chakra-ui/react";
import { TasksProvider } from "./app/contexts/tasks";

function App() {
  return (
    <div className="App font-schibstedGrotesk">
      <ChakraProvider>
        <TasksProvider>
          <PublicRouter />
        </TasksProvider>
      </ChakraProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
