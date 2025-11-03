import { CitiesResponse, WeatherResponse } from "../types/api";

const API_KEY = "eaf690d8c718fd9e8069954a4337495e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const ICON_URL = "https://openweathermap.org/img/wn";

export const fetchCities = async (city: string): Promise<CitiesResponse> => {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

export const fetchHourlyWeather = async (city: string) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();

  return data.list
    .slice(0, 8)
    .map(
      (item: { dt: number; main: { temp: number; feels_like: number } }) => ({
        time:
          new Date((item.dt + data.city.timezone) * 1000)
            .getUTCHours()
            .toString()
            .padStart(2, "0") + ":00",
        temp: item.main.temp,
      })
    );
};

export const getIconUrl = (icon: string, scale?: number) => {
  return `${ICON_URL}/${icon}${scale ? "@" + scale + "x" : ""}.png`;
};

export const getFlagUrl = (country: string) => {
  return `https://flagsapi.com/${country}/flat/32.png`;
};
