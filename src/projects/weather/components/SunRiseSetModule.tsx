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
        "flex justify-between items-center gap-3 h-fit text-center"
      )}
    >
      <div>
        <FiSunrise size={48} className="text-amber-300" />
        <Typography variant="body2">
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString("uk", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      </div>
      <div className="border-t-4 border-dashed flex-1 sm:w-16 border-amber-300" />
      <div>
        <FiSunset size={48} className="text-amber-300" />
        <Typography variant="body2">
          {new Date(data.sys.sunset * 1000).toLocaleTimeString("uk", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Typography>
      </div>
    </div>
  );
};

export default SunRiseSetModule;
