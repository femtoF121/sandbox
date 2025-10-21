import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCity, getIconUrl } from "@weather/api/weather";
import { ComponentProps, FC, useContext, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { RoutesEnum } from "@/router/routes";
import { WeatherContext } from "@weather/context";
import { City } from "@weather/types/city";
import { FaWind } from "react-icons/fa";
import { FaCheck, FaDroplet, FaRegTrashCan } from "react-icons/fa6";

interface CityCardProps extends ComponentProps<"div"> {
  city: City;
  id: string;
}

const CityCard: FC<CityCardProps> = ({ city, id, ...rest }) => {
  const { name: cityName } = city;
  const { deleteCity } = useContext(WeatherContext);
  const navigate = useNavigate();
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const { data, isError, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["weather", cityName],
    queryFn: () => fetchWeatherByCity(cityName),
    refetchOnWindowFocus: false,
  });

  return (
    <Card {...rest} className="bg-white">
      {isError ? (
        <Typography variant="h4" className="p-4 pb-0">
          {cityName} - Error
        </Typography>
      ) : (
        <CardActionArea
          onClick={() =>
            navigate(RoutesEnum.WEATHER + "/" + data?.name, {
              state: { enteredCityName: cityName },
            })
          }
        >
          <CardContent className="flex justify-between">
            {isLoading || isFetching || !data ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-300 w-72 mb-4" />
                <div className="h-16 bg-gray-200 rounded-xl dark:bg-gray-300 max-w-[360px] mb-2.5" />
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div>
                <Typography variant="h3" component="h2">
                  {data.name}
                </Typography>
                <div className="flex gap-12 mt-2">
                  <div>
                    <Typography variant="h4">
                      {Math.round(data.main.temp)}°C
                    </Typography>
                    <Typography>
                      Feels like: {Math.round(data.main.feels_like)}°C
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-3"
                    >
                      <FaDroplet size={20} className="text-blue-500" />{" "}
                      {data.main.humidity}%
                    </Typography>
                    <Typography
                      variant="h5"
                      className="flex items-center gap-3"
                    >
                      <FaWind size={20} className="text-slate-400" />{" "}
                      {data.wind.speed} m/s
                    </Typography>
                  </div>
                </div>
              </div>
            )}
            {isLoading || isFetching || !data ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="size-24 rounded-full bg-gray-200  dark:bg-gray-300 mb-4" />
              </div>
            ) : (
              <img
                src={getIconUrl(data.weather[0].icon, 2)}
                className="object-contain h-fit"
              />
            )}
          </CardContent>
        </CardActionArea>
      )}
      <CardActions className="!px-4 !pb-4">
        {!confirmDeletion ? (
          <>
            <Button
              onClick={() => refetch()}
              variant="contained"
              endIcon={<IoMdRefresh />}
            >
              Refresh
            </Button>
            <Button
              onClick={() => setConfirmDeletion(true)}
              variant="outlined"
              color="error"
              endIcon={<FaRegTrashCan size={16} />}
            >
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => deleteCity(id)}
              variant="contained"
              color="success"
              endIcon={<FaCheck size={16} />}
            >
              Confirm
            </Button>
            <Button
              onClick={() => setConfirmDeletion(false)}
              variant="contained"
              color="error"
              endIcon={<IoClose size={20} />}
            >
              Cancel
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CityCard;
