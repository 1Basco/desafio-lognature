import { useCallback } from "react";
import { ToastProvider } from "../../../app/providers/toast.provider";
import { StorageProvider } from "../../../app/providers/storage.provider";

function useTaskController() {
  const storageProvider: StorageProvider = StorageProvider.Instance;
  const toastProvider: ToastProvider = ToastProvider.Instance;

  const onClickCreateTask = useCallback(async () => {}, []);

  return {
    onClickCreateTask,
  };
}

export default useTaskController;
