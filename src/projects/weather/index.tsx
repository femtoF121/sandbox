import { RoutesEnum } from "@/router/routes";
import { Route } from "react-router-dom";
import WeatherLayout from "./layout";
import Home from "./pages/Home";
import WeatherDetailed from "./pages/WeatherDetailed";

const WeatherApp = () => {
  return (
    <Route element={<WeatherLayout />}>
      <Route path={RoutesEnum.WEATHER} element={<Home />} />
      <Route path={RoutesEnum.DETAILED_WEATHER} element={<WeatherDetailed />} />
    </Route>
  );
};

export default WeatherApp;
