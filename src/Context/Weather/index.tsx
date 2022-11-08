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

export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

interface Props {
  children: ReactNode;
}

interface weatherDataType {
  datasetDescription: string;
  location: [
    {
      locationName: string;
      weatherElement: [
        {
          elementName: "Wx";
          time: [
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterValue: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterValue: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterValue: string };
            }
          ];
        },
        {
          elementName: "Pop";
          time: [
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            }
          ];
        },
        {
          elementName: "Min";
          time: [
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            }
          ];
        },
        {
          elementName: "CI";
          time: [
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string };
            }
          ];
        },
        {
          elementName: "Max";
          time: [
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            },
            {
              startTime: string;
              endTime: string;
              parameter: { parameterName: string; parameterUnit: string };
            }
          ];
        }
      ];
    }
  ];
}

export const weatherContext = createContext<weatherDataType | undefined | null>(
  undefined
);

const WeatherProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<weatherDataType | null>();

  const GetWeatherData = async () => {
    try {
      const { data } = await getWeatherData();
      if (data) {
        console.log(data.records);
        const { records } = data;
        setWeatherData(records);
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
