import { Typography } from "@mui/material";
import { clsx } from "clsx";
import { ComponentProps, FC } from "react";
import { FaArrowUpLong, FaDroplet, FaWind } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { WeatherResponse } from "../types/api";
import SunRiseSetModule from "./SunRiseSetModule";

interface AdditionalInfoModuleProps extends ComponentProps<"div"> {
  data: WeatherResponse;
}

const AdditionalInfoModule: FC<AdditionalInfoModuleProps> = ({
  data,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        "flex justify-between items-center flex-wrap gap-y-6 text-base sm:text-2xl"
      )}
    >
      <div className="[&>*]:flex [&>*]:items-center [&>*]:gap-3 flex flex-col gap-2">
        <Typography variant="inherit">
          <FaWind size={24} className="text-slate-400" /> {data.wind.speed} m/s
        </Typography>
        <Typography variant="inherit">
          Direction:{" "}
          <FaArrowUpLong
            className="text-slate-400"
            style={{ transform: `rotate(${data.wind.deg}deg)` }}
          />
        </Typography>
      </div>
      <div className="[&>*]:flex [&>*]:items-center [&>*]:gap-3 flex flex-col gap-2">
        <Typography variant="inherit">
          <FaDroplet size={24} className="text-blue-500" /> {data.main.humidity}
          %
        </Typography>
        <Typography variant="inherit">
          <SlSpeedometer size={24} /> {data.main.pressure} mb
        </Typography>
      </div>
      <SunRiseSetModule className="basis-full sm:basis-auto" data={data} />
    </div>
  );
};

export default AdditionalInfoModule;
