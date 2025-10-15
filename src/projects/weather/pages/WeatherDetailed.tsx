import { Button, Card, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchWeatherByCity } from "../api/weather";
import AdditionalInfoModule from "../components/AdditionalInfoModule";
import TemperatureModule from "../components/TemperatureModule";
import WeatherImageModule from "../components/WeatherImageModule";

const WeatherDetailed = () => {
  const navigate = useNavigate();
  const { city } = useParams<{ city: string }>();
  const {
    state: { enteredCityName },
  } = useLocation();

  const { data, isError, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["weather", enteredCityName],
    queryFn: () => fetchWeatherByCity(enteredCityName),
    refetchOnWindowFocus: false,
  });

  const Header = () => {
    return (
      <header className="flex items-center py-6 px-4">
        <button
          className="rounded-full p-3 bg-white hover:bg-gray-200 active:bg-gray-300 transition-colors"
          onClick={() => navigate("..", { relative: "path" })}
        >
          <IoArrowBackOutline size={24} />
        </button>
        <Typography
          variant="h3"
          component="h1"
          className="flex-1 pr-12 text-center"
        >
          <span className="bg-white rounded-lg px-4">{city}</span>
        </Typography>
      </header>
    );
  };

  if (isError) navigate("..", { relative: "path" });

  return (
    <>
      <Header />
      <Card className="max-w-[860px] bg-white mx-auto !rounded-2xl py-6 px-10 mt-2">
        {isLoading || isFetching ? (
          <div className="flex justify-center">
            <CircularProgress size={64} />
          </div>
        ) : (
          <div>
            <div className="flex justify-around items-center ml-[-24px]">
              <TemperatureModule data={data} />
              <WeatherImageModule data={data} />
            </div>
            <AdditionalInfoModule data={data} className="my-6" />
            <Button
              onClick={() => refetch()}
              variant="contained"
              endIcon={<IoMdRefresh />}
            >
              Refresh
            </Button>
            <Typography variant="subtitle2">
              Updated:{" "}
              {new Date(data.dt * 1000).toLocaleTimeString("uk", {
                hour: "numeric",
                minute: "numeric",
              })}
            </Typography>
          </div>
        )}
      </Card>
    </>
  );
};

export default WeatherDetailed;
