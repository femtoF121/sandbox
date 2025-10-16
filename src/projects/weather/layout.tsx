import { Outlet } from "react-router-dom";
import bgTexture from "./assets/weather-texture.svg";

const WeatherLayout = () => {
  return (
    <div
      style={{
        background: `url(${bgTexture}), #4d4d4d`,
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </div>
  );
};

export default WeatherLayout;
