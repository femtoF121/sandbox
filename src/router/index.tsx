import Layout from "@/layout";
import Home from "@/pages/Home";
import TodoApp from "@/projects/taskList";
import WeatherApp from "@/projects/weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutesEnum.HOME} element={<Home />} />
          <Route path={RoutesEnum.TODO} element={<TodoApp />} />
          {WeatherApp()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
