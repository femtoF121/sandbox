import { useControlledList } from "@/hooks/useControlledList";
import { WeatherContext } from "@weather/context";
import { City } from "@weather/types/city";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WeatherDetailed from "./pages/WeatherDetailed";

const CITIES_STORAGE_KEY = "cities";

const WeatherApp = () => {
  const {
    items: cities,
    addItem: addCity,
    deleteItem: deleteCity,
  } = useControlledList<City>(CITIES_STORAGE_KEY);

  return (
    <WeatherContext value={{ cities, addCity, deleteCity }}>
      <Routes>
        <Route path={"/weather"} element={<Home />} />
        <Route path={"/weather/:city"} element={<WeatherDetailed />} />
      </Routes>
    </WeatherContext>
  );
};

export default WeatherApp;
