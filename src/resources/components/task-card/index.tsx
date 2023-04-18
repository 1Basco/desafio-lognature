import { Badge, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TaskStatusConstants } from "../../../app/constants/task-status.constants";
import { StatusColors, StatusText, TaskCardOptions } from "./types";
import { RouteConstants } from "../../../app/constants/route.constants";
import dayjs from "dayjs";
import ToggleButton from "../buttons/toggle";
import { translate } from "../../../configuration/i18n.configuration";

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
  task,
  onClickDeleteTask,
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
      _hover={{
        bg: STATUS_COLORS[task.status],
        transition: "background-color 3s",
      }}
      transition="background-color 1s"
    >
      <Box
        p={4}
        onClick={() => handleClick(task.id)}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box fontWeight="bold" fontSize="xl">
          {task.title.length > 50
            ? `${task.title.slice(0, 50)}...`
            : task.title}
        </Box>
        <Box>
          {task.description.length > 50
            ? `${task.description.slice(0, 50)}...`
            : task.description}
        </Box>
        <Box pt={2}>
          <p className="text-xs">
            {translate("task.createdAt")}{" "}
            {dayjs(task.createdAt).format("DD/MM/YYYY HH:mm")}
          </p>
        </Box>
      </Box>
      <Box
        p={4}
        bg="blue.900"
        alignSelf="flex-end"
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        justifyItems={"center"}
      >
        <Badge
          bg={STATUS_COLORS[task.status]}
          textColor={"#212121"}
          alignSelf={"center"}
        >
          {STATUS_TEXT[task.status]}
        </Badge>
        <ToggleButton onClick={() => onClickDeleteTask(task.id)} />
      </Box>
    </Box>
  );
}
