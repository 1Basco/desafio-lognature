import { translate } from "../../../../configuration/i18n.configuration";
import YupSettings from "../../../../configuration/yup.configuration";

export const TaskYupFormSchema = YupSettings.object().shape({
  title: YupSettings.string().required(translate("common.title_is_required")),
  description: YupSettings.string().required(
    translate("common.description_is_required")
  ),
  status: YupSettings.number()
    .oneOf([0, 1, 2])
    .required(translate("common.status_is_required")),
});
