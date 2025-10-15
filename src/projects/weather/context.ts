import { ItemType } from "@/types/item";
import { createContext } from "react";
import { City } from "./types/city";

type WeatherContextType<T> = {
  cities: ItemType<T>[];
  addCity: (city: T) => void;
  deleteCity: (id: string) => void;
};

export const WeatherContext = createContext<WeatherContextType<City>>(null);
