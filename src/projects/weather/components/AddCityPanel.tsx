import { Button, TextField } from "@mui/material";
import { WeatherContext } from "@weather/context";
import { useContext, useState } from "react";

const AddCityPanel = () => {
  const { addCity } = useContext(WeatherContext);
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    setValue("");
    addCity({ name: value });
  };

  return (
    <div className="mx-auto flex gap-4 w-full">
      <TextField
        type="text"
        placeholder="Enter city name"
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

export default AddCityPanel;
