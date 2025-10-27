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
          {getUTCTimeString(data.sys.sunrise, data.timezone)}
        </Typography>
      </div>
      <div className="border-t-4 border-dashed flex-1 sm:w-16 border-amber-300" />
      <div>
        <FiSunset size={48} className="text-amber-300" />
        <Typography variant="body2">
          {getUTCTimeString(data.sys.sunset, data.timezone)}
        </Typography>
      </div>
    </div>
  );
};

const getUTCTimeString = (timestamp: number, timezone: number = 0) => {
  const utcDate = new Date((timestamp + timezone) * 1000);
  return (
    utcDate.getUTCHours().toString().padStart(2, "0") +
    ":" +
    utcDate.getUTCMinutes().toString().padStart(2, "0")
  );
};

export default SunRiseSetModule;
