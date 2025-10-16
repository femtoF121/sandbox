import { useControlledList } from "@/hooks/useControlledList";
import { RoutesEnum } from "@/router/routes";
import { WeatherContext } from "@weather/context";
import { City } from "@weather/types/city";
import { Route, Routes } from "react-router-dom";
import WeatherLayout from "./layout";
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
        <Route element={<WeatherLayout />}>
          <Route path={RoutesEnum.WEATHER} element={<Home />} />
          <Route
            path={RoutesEnum.DETAILED_WEATHER}
            element={<WeatherDetailed />}
          />
        </Route>
      </Routes>
    </WeatherContext>
  );
};

export default WeatherApp;
