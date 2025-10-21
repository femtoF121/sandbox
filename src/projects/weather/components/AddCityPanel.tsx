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
      <div className="flex-1 bg-white rounded-lg">
        <TextField
          type="text"
          placeholder="Enter city name"
          value={value}
          className="w-full"
          sx={{
            "& .MuiInputBase-input": {
              fontSize: 22,
              padding: "12px 16px",
            },
          }}
          size="medium"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
      </div>
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
