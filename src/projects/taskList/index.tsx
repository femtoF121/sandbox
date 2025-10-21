import { useControlledList } from "@/hooks/useControlledList";
import AddTaskPanel from "./components/AddTaskPanel";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Task from "./components/Task";
import { TaskListContext } from "./context";
import type { Task as TaskType } from "./types/task";

const TASKS_STORAGE_KEY = "tasks";

const TaskList = () => {
  const {
    items: tasks,
    addItem: addTask,
    deleteItem: deleteTask,
    setItems: setTasks,
  } = useControlledList<TaskType>(TASKS_STORAGE_KEY);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask }}
    >
      <Header />
      <div className="flex flex-col items-center p-6 pt-0 [&>*]:w-full max-w-[860px] mx-auto">
        <div className="pt-6 shadow-[0_15px_10px_5px] shadow-gray-100 bg-gray-100 sticky top-0 z-10">
          <AddTaskPanel />
          <ProgressBar className="mt-1.5" />
        </div>
        <div className="mt-10 space-y-2">
          {tasks.map(({ id, ...task }) => (
            <Task key={id} id={id} task={task} />
          ))}
        </div>
      </div>
    </TaskListContext.Provider>
  );
};

export default TaskList;
