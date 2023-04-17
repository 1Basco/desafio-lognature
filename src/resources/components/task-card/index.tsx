import { Badge, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TaskStatusConstants } from "../../../app/constants/task-status.constants";
import { StatusColors, StatusText, TaskCardOptions } from "./types";
import { RouteConstants } from "../../../app/constants/route.constants";

const STATUS_COLORS: StatusColors = {
  [TaskStatusConstants.PENDING]: "red",
  [TaskStatusConstants.IN_PROGRESS]: "orange",
  [TaskStatusConstants.COMPLETED]: "green.500",
};
const STATUS_TEXT: StatusText = {
  [TaskStatusConstants.PENDING]: "Pending",
  [TaskStatusConstants.IN_PROGRESS]: "In Progress",
  [TaskStatusConstants.COMPLETED]: "Completed",
};

export default function TaskCard({
  title,
  description,
  status,
  taskId,
}: TaskCardOptions): JSX.Element {
  const navigate = useNavigate();
  const handleClick = (taskId: string) => {
    navigate(RouteConstants.TASK.replace(":taskId", taskId));
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="lg"
      m={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      onClick={() => handleClick(taskId)}
      _hover={{ bg: STATUS_COLORS[status], transition: "background-color 3s" }}
      transition="background-color 1s"
    >
      <Box p={4}>
        <Box fontWeight="bold" fontSize="xl">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </Box>
        <Box>
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </Box>
      </Box>
      <Box p={4} bg="blue.900" alignSelf="flex-end" width={"100%"}>
        <Badge bg={STATUS_COLORS[status]} textColor={"#212121"}>
          {STATUS_TEXT[status]}
        </Badge>
      </Box>
    </Box>
  );
}
