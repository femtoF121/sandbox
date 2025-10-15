import { Typography } from "@mui/material";
import { clsx } from "clsx";
import { ComponentProps, FC } from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { WeatherResponse } from "../types/api";

interface SunRiseSetModuleProps extends ComponentProps<"div"> {
  data: WeatherResponse;
}

const SunRiseSetModule: FC<SunRiseSetModuleProps> = ({
  data,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        "grid grid-cols-2 gap-y-2 gap-x-10 justify-items-center h-fit"
      )}
    >
      <FiSunrise size={48} className="text-orange-300" />
      <FiSunset size={48} className="text-orange-300" />
      <Typography variant="body2">
        {new Date(data.sys.sunrise * 1000).toLocaleTimeString("uk", {
          hour: "numeric",
          minute: "numeric",
        })}
      </Typography>
      <Typography variant="body2">
        {new Date(data.sys.sunset * 1000).toLocaleTimeString("uk", {
          hour: "numeric",
          minute: "numeric",
        })}
      </Typography>
    </div>
  );
};

export default SunRiseSetModule;
