import AddCityPanel from "@weather/components/AddCityPanel";
import CityCard from "@weather/components/CityCard";
import { WeatherContext } from "@weather/context";
import { useContext } from "react";

const Home = () => {
  const { cities } = useContext(WeatherContext);
  return (
    <div className="p-4 space-y-4 mx-auto max-w-[860px]">
      <AddCityPanel />
      {cities.map(({ id, ...city }) => (
        <CityCard key={id} id={id} city={city} />
      ))}
    </div>
  );
};

export default Home;
