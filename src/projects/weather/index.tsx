import { useControlledList } from "@/hooks/useControlledList";
import AddCityPanel from "@weather/components/AddCityPanel";
import CityCard from "@weather/components/CityCard";
import { WeatherContext } from "@weather/context";
import { City } from "@weather/types/city";

const CITIES_STORAGE_KEY = "cities";

const WeatherApp = () => {
  const {
    items: cities,
    addItem: addCity,
    deleteItem: deleteCity,
  } = useControlledList<City>(CITIES_STORAGE_KEY);

  return (
    <WeatherContext value={{ cities, addCity, deleteCity }}>
      <div className="p-4 space-y-4 mx-auto max-w-[860px]">
        <AddCityPanel />
        {cities.map(({ id, ...city }) => (
          <CityCard key={id} id={id} city={city} />
        ))}
      </div>
    </WeatherContext>
  );
};

export default WeatherApp;
