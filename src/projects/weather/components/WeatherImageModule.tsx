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
    <div
      {...rest}
      className={clsx(className, "relative w-fit -mt-10 text-base sm:text-2xl")}
    >
      <img
        src={getIconUrl(data.weather[0].icon, 4)}
        className="object-contain h-fit max-h-40 sm:max-h-full"
      />
      <Typography
        variant="inherit"
        className="absolute w-full text-center bottom-[10%]"
      >
        {data.weather[0].description[0].toUpperCase() +
          data.weather[0].description.slice(1)}
      </Typography>
    </div>
  );
};

export default WeatherImageModule;
