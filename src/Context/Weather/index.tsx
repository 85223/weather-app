import { AxiosError } from "axios";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getWeatherData, getWeatherStateData } from "../../api";
import { IWeatherStateData, ICurrentWeatherData } from "../../interface";

export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

interface Props {
  children: ReactNode;
}

interface IWeatherContext {
  weatherData: ICurrentWeatherData[] | undefined;
  weatherStateData: IWeatherStateData[] | undefined;
}

export const weatherContext = createContext<IWeatherContext | undefined>(undefined);

const WeatherProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<ICurrentWeatherData[] | undefined>(undefined);
  const [weatherStateData, setWeatherStateData] = useState<IWeatherStateData[] | undefined>(
    undefined
  );

  const GetWeatherData = async () => {
    try {
      const { data } = await getWeatherData();
      if (data) {
        const { records } = data;
        const { location } = records;

        setWeatherData(location);
      }
      return data;
    } catch (error: any) {
      console.log(error);
      return { error, data: undefined };
    }
  };

  const GetWeatherStateData = async () => {
    try {
      const { data } = await getWeatherStateData();
      const { records } = data;
      const { location } = records;
      setWeatherStateData(location);

      console.log("GetWeatherStateData", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetWeatherData();
    GetWeatherStateData();
  }, []);

  return (
    <weatherContext.Provider
      value={{ weatherData: weatherData, weatherStateData: weatherStateData }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;

export const useWeatherCotext = () => {
  const weatherContextData = useContext(weatherContext);
  if (weatherContextData === undefined) {
    throw new Error("weatherContextData is undefined!");
  }
  return weatherContextData;
};
