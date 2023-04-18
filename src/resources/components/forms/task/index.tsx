import {
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TaskStatusConstants } from "../../../../app/constants/task-status.constants";
import { TaskYupFormSchema } from "./schema.yup";
import { TaskFormOptions, TaskFormValues } from "./types";
import { RouteConstants } from "../../../../app/constants/route.constants";
import { translate } from "../../../../configuration/i18n.configuration";

export const TaskForm = ({ task, onClick }: TaskFormOptions) => {
  const navigate = useNavigate();

  const handleNavigation = (taskId?: string): void => {
    if (task) {
      navigate(RouteConstants.ROOT);
    }
    if (taskId) {
      navigate(RouteConstants.TASK.replace(":taskId", taskId));
    }
  };

  const formik = useFormik<TaskFormValues>({
    initialValues: {
      title: task?.title ? task.title : "",
      description: task?.description ? task.description : "",
      status: task?.status ? task.status : 0,
    },
    onSubmit: async (values) => {
      if (task) {
        try {
          await onClick(values);
        } catch (error) {
          console.error(error);
        } finally {
          handleNavigation();
          formik.resetForm();
          formik.setSubmitting(false);
        }
      } else {
        let addedTask;
        try {
          addedTask = await onClick(values);
        } catch (error) {
          console.error(error);
        } finally {
          handleNavigation(addedTask?.id);
          formik.resetForm();
          formik.setSubmitting(false);
        }
      }
    },

    validationSchema: TaskYupFormSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Card className="p-3">
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4} isInvalid={!!formik.errors.title}>
          <FormLabel htmlFor="title">{translate("heading.title")}</FormLabel>
          <Input
            id="title"
            placeholder={translate("common.task_title")}
            {...formik.getFieldProps("title")}
          />
          <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={!!formik.errors.description}>
          <FormLabel htmlFor="description">
            {translate("heading.description")}
          </FormLabel>
          <Textarea
            id="description"
            placeholder={translate("common.task_description")}
            {...formik.getFieldProps("description")}
          />
          <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4} isInvalid={!!formik.errors.status}>
          <FormLabel htmlFor="status">{translate("heading.status")}</FormLabel>
          <Select id="status" {...formik.getFieldProps("status")}>
            <option value={TaskStatusConstants.PENDING}>
              {translate("heading.to_do")}
            </option>
            <option value={TaskStatusConstants.IN_PROGRESS}>
              {translate("heading.in_progress")}
            </option>
            <option value={TaskStatusConstants.COMPLETED}>
              {translate("heading.finished")}
            </option>
          </Select>
          <FormErrorMessage>{formik.errors.status}</FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="blue"
          bg={"blue.900"}
          type="submit"
          isLoading={formik.isSubmitting}
        >
          {task
            ? translate("common.update_task")
            : translate("common.create_task")}
        </Button>
      </form>
    </Card>
  );
};
