import axios, { AxiosError } from "axios";
import React, {
  Context,
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

export interface weatherDataType {
  records: {
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
  };
}

interface Props {
  children: React.ReactNode;
}

const getWeather = async (): Promise<Response<weatherDataType>> => {
  try {
    const data = await axios.get<weatherDataType>(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-1698A141-1DE8-4E52-8DEA-49C0C11B3611&format=JSON&locationName="
    );

    return data;
  } catch (error: any) {
    console.log("error", error);
    return { error, data: undefined };
  }
};

export const weatherContext = createContext<weatherDataType | undefined>(
  undefined
);

const CreateWeatherProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<weatherDataType>();

  const GetWeatherData = async () => {
    try {
      const { data } = await getWeather();
      if (data) {
        const { records } = data;
        const { location, datasetDescription } = records;
      }
      setWeatherData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetWeatherData();
  }, []);

  return (
    <weatherContext.Provider value={weatherData}>
      <div style={{ color: "#fafafa" }}>{children}</div>
    </weatherContext.Provider>
  );
};

export const createWeatherContext = () => {
  return {
    weatherProvider: CreateWeatherProvider,
    useWeather: () => useContext(weatherContext),
  };
};

export default CreateWeatherProvider;
