import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Card,
} from "@chakra-ui/react";
import { TaskStatusConstants } from "../../../../app/constants/task-status.constants";

interface TaskFormValues {
  title: string;
  description: string;
  status: number;
}

interface TaskFormOptions {
  onClick: (data: TaskFormValues) => Promise<void>;
}
export const TaskForm = ({ onClick }: TaskFormOptions) => {
  const formik = useFormik<TaskFormValues>({
    initialValues: { title: "", description: "", status: 0 },
    onSubmit: (values) => {
      try {
        onClick(values);
      } catch (error) {
        console.error(error);
      } finally {
        formik.resetForm();
        formik.isSubmitting = false;
      }
    },
  });

  return (
    <Card className="p-3">
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Task title"
            {...formik.getFieldProps("title")}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="Task description"
            {...formik.getFieldProps("description")}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select id="status" {...formik.getFieldProps("status")}>
            <option value={TaskStatusConstants.PENDING}>Pending</option>
            <option value={TaskStatusConstants.IN_PROGRESS}>In Progress</option>
            <option value={TaskStatusConstants.COMPLETED}>Finished</option>
          </Select>
        </FormControl>

        <Button
          colorScheme="blue"
          bg={"blue.900"}
          type="submit"
          isLoading={formik.isSubmitting}
        >
          Create Task
        </Button>
      </form>
    </Card>
  );
};
