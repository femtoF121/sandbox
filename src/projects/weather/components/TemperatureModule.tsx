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
      <Typography variant="h1">{Math.round(data.main.temp)}°C</Typography>
      <Typography variant="h5">
        Feels like: {Math.round(data.main.feels_like)}°C
      </Typography>
    </div>
  );
};

export default TemperatureModule;
