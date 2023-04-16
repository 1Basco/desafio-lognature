import YupSettings from "../../../../configuration/yup.configuration";

export const TaskYupFormSchema = YupSettings.object().shape({
  title: YupSettings.string().required("Title is required"),
  description: YupSettings.string().required("Description is required"),
  status: YupSettings.number().oneOf([0, 1, 2]).required("Status is required"),
});
