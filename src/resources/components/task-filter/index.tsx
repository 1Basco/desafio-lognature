import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GiPlayerTime } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { RiTodoFill } from "react-icons/ri";
import { TaskStatusConstants } from "../../../app/constants/task-status.constants";

interface TaskFilterOptions {
  onFilter: (filter: string | number) => void;
}
const TaskFilter = ({ onFilter }: TaskFilterOptions) => {
  const [activeFilter, setActiveFilter] = useState<string | number>("all");

  const handleClick = (filter: string | number) => {
    setActiveFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="py-4 px-7">
      <h3 className="mr-4">Filters</h3>
      <Wrap spacing={4}>
        <WrapItem>
          <Button
            isActive={activeFilter === "all"}
            onClick={() => handleClick("all")}
            leftIcon={<HiUserGroup />}
          >
            All
          </Button>
        </WrapItem>

        <WrapItem>
          <Button
            isActive={activeFilter === TaskStatusConstants.PENDING}
            onClick={() => handleClick(TaskStatusConstants.PENDING)}
            leftIcon={<RiTodoFill />}
          >
            To Do
          </Button>
        </WrapItem>

        <WrapItem>
          <Button
            isActive={activeFilter === TaskStatusConstants.IN_PROGRESS}
            onClick={() => handleClick(TaskStatusConstants.IN_PROGRESS)}
            leftIcon={<GiPlayerTime />}
          >
            In Progress
          </Button>
        </WrapItem>

        <WrapItem>
          <Button
            isActive={activeFilter === TaskStatusConstants.COMPLETED}
            onClick={() => handleClick(TaskStatusConstants.COMPLETED)}
            leftIcon={<BsFillCalendarCheckFill />}
          >
            Completed
          </Button>
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default TaskFilter;
