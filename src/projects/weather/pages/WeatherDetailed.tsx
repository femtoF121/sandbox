import { useParams } from "react-router-dom";

const WeatherDetailed = () => {
  const { city } = useParams<{ city: string }>();
  return <div>WeatherDetailed {city}</div>;
};

export default WeatherDetailed;
