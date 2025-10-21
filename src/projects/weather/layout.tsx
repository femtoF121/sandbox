import { Outlet } from "react-router-dom";
import bgTexture from "./assets/weather-texture.svg";

const WeatherLayout = () => {
  return (
    <div
      style={{
        background: `url(${bgTexture}), #4d4d4d`,
      }}
      className="min-h-screen p-4"
    >
      <Outlet />
    </div>
  );
};

export default WeatherLayout;
