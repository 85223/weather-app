import axios, { AxiosError } from "axios";
import React, {
  Context,
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getWeatherData } from "../../api";
import { IWeatherData } from "../../interface";

export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

interface Props {
  children: ReactNode;
}

export const weatherContext = createContext<IWeatherData | undefined>(
  undefined
);

const WeatherProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  const GetWeatherData = async () => {
    try {
      const { data } = await getWeatherData();
      if (data) {
        console.log(data.records);
        const { records } = data;
        console.log(records);

        setWeatherData(data);
      }
      return data;
    } catch (error: any) {
      console.log(error);
      return { error, data: undefined };
    }
  };

  useEffect(() => {
    GetWeatherData();
  }, []);

  return (
    <weatherContext.Provider value={weatherData}>
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
