import { clsx } from "clsx";
import { ComponentProps, FC, useContext, useMemo } from "react";
import { TaskListContext } from "../context";
import { Task } from "../types/task";

const ProgressBar: FC<ComponentProps<"div">> = ({ className, ...rest }) => {
  const { tasks } = useContext(TaskListContext);
  const completedTasks = useMemo(
    () => tasks.filter(({ done }: Task) => done).length,
    [tasks]
  );

  return (
    <div {...rest} className={clsx(className, "flex gap-2 items-center")}>
      <div className="bg-white h-3 rounded-full overflow-hidden relative flex-1 mt-0.5">
        <div
          className="bg-blue-400 h-full absolute top-0 left-0 transition-all"
          style={{
            width: `${(completedTasks * 100) / tasks.length}%`,
          }}
        />
      </div>
      {completedTasks}/{tasks.length}
    </div>
  );
};

export default ProgressBar;
