import { Typography } from "@mui/material";
import { clsx } from "clsx";
import { ComponentProps, FC } from "react";
import { WeatherResponse } from "../types/api";

interface TemperatureModuleProps extends ComponentProps<"div"> {
  data: WeatherResponse;
}

const TemperatureModule: FC<TemperatureModuleProps> = ({
  data,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx("text-center", className)}>
      <div className="text-6xl sm:text-8xl bold">
        <Typography variant="inherit">
          {Math.round(data.main.temp)}°C
        </Typography>
      </div>
      <div className="text-base sm:text-2xl">
        <Typography variant="inherit">
          Feels like: {Math.round(data.main.feels_like)}°C
        </Typography>
      </div>
    </div>
  );
};

export default TemperatureModule;
