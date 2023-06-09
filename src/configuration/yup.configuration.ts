import * as YupSettings from "yup";
import { translate } from "./i18n.configuration";

YupSettings.setLocale({
  mixed: {
    required: translate("common.required"),
    default: "WIP",
  },
  string: {
    email: "WIP",
    min: "WIP",
    max: "WIP",
  },
  number: {
    min: "WIP",
    max: "WIP",
  },
});

export default YupSettings;
