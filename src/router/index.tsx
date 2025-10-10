import Home from "@/pages/Home";
import TodoApp from "@/projects/taskList";
import WeatherApp from "@/projects/weather";
import WeatherDetailed from "@weather/pages/WeatherDetailed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<Home />} />
        <Route path={RoutesEnum.TODO} element={<TodoApp />} />
        <Route path={RoutesEnum.WEATHER} element={<WeatherApp />} />
        <Route
          path={RoutesEnum.DETAILED_WEATHER}
          element={<WeatherDetailed />}
        />
      </Routes>
    </BrowserRouter>
  );
}
