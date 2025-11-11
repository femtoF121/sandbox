import { useControlledList } from "@/hooks/useControlledList";
import { Outlet } from "react-router-dom";
import bgTexture from "./assets/weather-texture.svg";
import { WeatherContext } from "./context";
import { City } from "./types/city";

const CITIES_STORAGE_KEY = "cities";

const WeatherLayout = () => {
  const {
    items: cities,
    addItem: addCity,
    deleteItem: deleteCity,
  } = useControlledList<City>(CITIES_STORAGE_KEY);

  return (
    <WeatherContext.Provider value={{ cities, addCity, deleteCity }}>
      <div
        style={{
          background: `url(${bgTexture}), #4d4d4d`,
        }}
        className="min-h-screen p-4"
      >
        <Outlet />
      </div>
    </WeatherContext.Provider>
  );
};

export default WeatherLayout;
