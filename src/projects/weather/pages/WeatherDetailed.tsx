import { Button, Card, CircularProgress, Typography } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchWeatherByCity } from "../api/weather";
import AdditionalInfoModule from "../components/AdditionalInfoModule";
import { TemperatureChart } from "../components/TemperatureChart";
import TemperatureModule from "../components/TemperatureModule";
import WeatherImageModule from "../components/WeatherImageModule";

const WeatherDetailed = () => {
  const navigate = useNavigate();
  const { city } = useParams<{ city: string }>();
  const {
    state: { enteredCityName },
  } = useLocation();

  const queryClient = useQueryClient();
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["weather", enteredCityName],
    queryFn: () => fetchWeatherByCity(enteredCityName),
    refetchOnWindowFocus: false,
  });

  const Header = () => {
    return (
      <header className="relative pl-14 sm:p-0">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-3 icon-button"
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline size={24} />
        </button>
        <Typography
          variant="h3"
          component="h1"
          className="!ml-auto sm:!mx-auto text-center bg-white rounded-lg px-4 block w-fit"
        >
          {city}
        </Typography>
      </header>
    );
  };

  if (isError || !enteredCityName) navigate("..", { relative: "path" });

  return (
    <>
      <Header />
      <Card className="max-w-[860px] bg-white mx-auto !rounded-2xl py-6 px-10 mt-6">
        {isLoading || !data ? (
          <div className="flex justify-center">
            <CircularProgress size={64} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between sm:justify-around items-center mr-[-24px]">
              <TemperatureModule data={data} />
              <WeatherImageModule data={data} />
            </div>
            <AdditionalInfoModule data={data} className="my-4" />
            <TemperatureChart city={enteredCityName} />
            <div className="mt-4 flex justify-between items-end">
              <Button
                onClick={() => {
                  refetch();
                  queryClient.invalidateQueries({
                    queryKey: ["hourlyWeather", enteredCityName],
                  });
                }}
                variant="contained"
                endIcon={<IoMdRefresh />}
              >
                Refresh
              </Button>
              <Typography variant="subtitle2">
                Updated:{" "}
                {new Date(data.dt * 1000).toLocaleTimeString(
                  navigator.language,
                  {
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}
              </Typography>
            </div>
          </div>
        )}
      </Card>
    </>
  );
};

export default WeatherDetailed;
