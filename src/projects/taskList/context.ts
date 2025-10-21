import { ItemType } from "@/types/item";
import { createContext } from "react";
import { Task } from "./types/task";

type TaskListContextType<T> = {
  tasks: ItemType<T>[];
  addTask: (city: T) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export const TaskListContext = createContext<TaskListContextType<Task>>(
  {} as TaskListContextType<Task>
);
