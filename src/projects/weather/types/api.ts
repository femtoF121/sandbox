export type WeatherResponse = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
  wind: { speed: number; deg: number };
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
};
