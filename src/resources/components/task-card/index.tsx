import { Badge, Box } from "@chakra-ui/react";
import { StatusColors, TaskCardOptions } from "./types";
import { TaskStatusConstants } from "../../../app/constants/task-status.constants";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../../app/constants/route.constants";

const STATUS_COLORS: StatusColors = {
  [TaskStatusConstants.PENDING]: "red",
  [TaskStatusConstants.IN_PROGRESS]: "orange",
  [TaskStatusConstants.COMPLETED]: "green.500",
};

export default function TaskCard({
  title,
  description,
  status,
  taskId,
}: TaskCardOptions): JSX.Element {
  const navigate = useNavigate();
  const handleClick = (taskId: string) => {
    navigate(`task/${taskId}`);
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
          {status === 0 ? "Pending" : status === 1 ? "In Progress" : "Finished"}
        </Badge>
      </Box>
    </Box>
  );
}
