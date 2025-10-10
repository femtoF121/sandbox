import { Task as TaskType } from "@/projects/taskList/types/task";
import { Checkbox } from "@mui/material";
import { TaskListContext } from "@taskList/context";
import { clsx } from "clsx";
import { ComponentProps, FC, useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

interface TaskProps extends ComponentProps<"label"> {
  task: TaskType;
  id: string;
}

const Task: FC<TaskProps> = ({ task, id, className, ...rest }) => {
  const { text, done } = task;
  const { deleteTask, toggleTask } = useContext(TaskListContext);

  return (
    <label
      {...rest}
      htmlFor={id}
      className={clsx(
        className,
        "flex gap-2 items-center rounded py-2.5 px-3 border border-gray-300 hover:border-black cursor-pointer",
        done ? "bg-gray-100" : "bg-white"
      )}
    >
      <Checkbox
        checked={done}
        onChange={() => toggleTask(id)}
        id={id}
        className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
      />
      <span className={clsx("flex-1", { "line-through text-gray-500": done })}>
        {text}
      </span>
      <button
        className="rounded-full p-2 hover:bg-red-50"
        onClick={() => deleteTask(id)}
      >
        <FaRegTrashCan className="text-red-500" />
      </button>
    </label>
  );
};

export default Task;
