import { Button, TextField } from "@mui/material";
import { WeatherContext } from "@weather/context";
import { useContext, useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";

const AddCityPanel = () => {
  const { addCity } = useContext(WeatherContext);
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  const handleAddCity = (city: string) => {
    setValue("");
    setDebouncedValue("");
    addCity({ name: city });
  };

  return (
    <div className="mx-auto flex gap-4 w-full">
      <div className="flex-1 bg-white rounded-lg relative">
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
            if (e.key === "Enter") handleAddCity(value);
          }}
        />
        <AutoComplete
          value={debouncedValue}
          onItemClick={(city: string) => handleAddCity(city)}
        />
      </div>
      <Button
        variant="contained"
        size="medium"
        className="!min-w-20"
        onClick={() => handleAddCity(value)}
      >
        Add
      </Button>
    </div>
  );
};

export default AddCityPanel;
