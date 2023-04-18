import { toast } from "react-toastify";
import { translate } from "../../configuration/i18n.configuration";

export class ToastProvider {
  private static _instance: ToastProvider;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public success = (message?: string) => {
    toast.success(message ?? translate("common.success"));
  };

  public error = (message?: string) => {
    toast.error(message ?? translate("common.error"));
  };

  public warning = (message?: string) => {
    toast.warning(message ?? translate("common.warning"));
  };
}
