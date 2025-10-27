import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchHourlyWeather } from "@weather/api/weather";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const TemperatureChart = ({ city }: { city: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["hourlyWeather", city],
    queryFn: () => fetchHourlyWeather(city),
  });

  if (isLoading)
    return (
      <div className="flex justify-center">
        <CircularProgress size={64} />
      </div>
    );
  if (!data) return null;

  return (
    <ResponsiveContainer width="100%" height={250} className="select-none">
      <LineChart
        data={data}
        responsive
        margin={{ left: -10, right: 20, top: 5 }}
      >
        <XAxis dataKey="time" />
        <YAxis
          dataKey="temp"
          tickFormatter={(value) => `${Math.round(value)} °C`}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          formatter={(value: number) => [`${value}°C`, null]}
          contentStyle={{
            background: "white",
            borderRadius: "8px",
          }}
        />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#1976d2"
          strokeWidth={3}
          dot={{ r: 4 }}
        >
          <LabelList
            dataKey="temp"
            position="bottom"
            offset={10}
            formatter={(label) =>
              label === data[0].temp
                ? null
                : `${Math.round(label as number)} °C`
            }
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};
