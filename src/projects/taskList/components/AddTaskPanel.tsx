import { Button, TextField } from "@mui/material";
import { TaskListContext } from "@taskList/context";
import { useContext, useState } from "react";

const AddTaskPanel = () => {
  const { addTask } = useContext(TaskListContext);
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    setValue("");
    addTask({ text: value, done: false });
  };

  return (
    <div className="mx-auto flex gap-4 w-full">
      <TextField
        type="text"
        placeholder="New task"
        value={value}
        className="flex-1 bg-white"
        size="medium"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <Button
        variant="contained"
        size="medium"
        className="!min-w-20"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTaskPanel;
