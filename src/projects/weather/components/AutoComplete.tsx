import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { fetchCities, getFlagUrl } from "../api/weather";

interface AutoCompleteProps extends ComponentProps<"div"> {
  value: string;
  onItemClick: (city: string) => void;
}

const AutoComplete: FC<AutoCompleteProps> = ({
  value,
  className,
  onItemClick,
  ...rest
}) => {
  const { data } = useQuery({
    queryKey: ["city-autocomplete", value],
    queryFn: () => fetchCities(value),
  });

  if (!value || !data || data.length <= 0) return null;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "absolute bg-white w-full z-10 top-[calc(100%+8px)] border border-gray-300 rounded-lg shadow-md py-4"
      )}
    >
      {data?.map(({ name, lat, lon, state, country }) => (
        <div
          className="px-4 py-2 flex items-center justify-between cursor-pointer transition-colors bg-white hover:bg-gray-100 active:bg-gray-100"
          role="button"
          tabIndex={0}
          key={`${name}-${lat}-${lon}`}
          onClick={() => onItemClick(name)}
        >
          <span>
            {name}
            {state && `, ${state}`}
          </span>
          <img src={getFlagUrl(country)} />
        </div>
      ))}
    </div>
  );
};

export default AutoComplete;
