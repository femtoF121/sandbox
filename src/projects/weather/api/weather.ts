import { WeatherResponse } from "../types/api";

const API_KEY = "eaf690d8c718fd9e8069954a4337495e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const ICON_URL = "https://openweathermap.org/img/wn";

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherResponse> => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const getIconUrl = (icon: string, scale?: number) => {
  return `${ICON_URL}/${icon}${scale ? "@" + scale + "x" : ""}.png`;
};
