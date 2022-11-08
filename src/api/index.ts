import Axios, { AxiosError } from "axios";
export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

export interface weatherDataRespType {
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

const apiURL = "https://opendata.cwb.gov.tw/api/v1/rest/datastore";

const weatherAxios = Axios.create({ baseURL: apiURL });

/**
 * 取得天氣預報api
 * @param
 */

export const getWeatherData = async (): Promise<
  Response<weatherDataRespType>
> => {
  try {
    const { data } = await weatherAxios.request<weatherDataRespType>({
      url: "/F-C0032-001?Authorization=CWB-1698A141-1DE8-4E52-8DEA-49C0C11B3611&format=JSON&locationName=",
      method: "get",
    });
    return { data };
  } catch (error: any) {
    console.log(error);
    return { error, data: undefined };
  }
};

// ("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-1698A141-1DE8-4E52-8DEA-49C0C11B3611&format=JSON&locationName=");
