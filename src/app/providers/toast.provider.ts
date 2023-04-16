import { toast } from "react-toastify";

export class ToastProvider {
  private static _instance: ToastProvider;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public success = (message?: string) => {
    toast.success(message ?? "Success WIP");
  };

  public error = (message?: string) => {
    toast.error(message ?? "Error WIP");
  };

  public warning = (message?: string) => {
    toast.warning(message ?? "Cuidado WIP");
  };
}
