import { Typography } from "@mui/material";
import { clsx } from "clsx";
import { ComponentProps, FC } from "react";
import { getIconUrl } from "../api/weather";
import { WeatherResponse } from "../types/api";

interface WeatherImageModuleProps extends ComponentProps<"div"> {
  data: WeatherResponse;
}

const WeatherImageModule: FC<WeatherImageModuleProps> = ({
  data,
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(className, "relative w-fit -mt-5")}>
      <img
        src={getIconUrl(data.weather[0].icon, 4)}
        className="object-contain h-fit"
      />
      <Typography variant="h5" className="absolute w-full text-center bottom-5">
        {data.weather[0].description[0].toUpperCase() +
          data.weather[0].description.slice(1)}
      </Typography>
    </div>
  );
};

export default WeatherImageModule;
