import Axios, { AxiosError } from "axios";
import { IWeatherData } from "../interface";
export interface Response<T> {
  error?: AxiosError<{
    data: { message: string; errors: { [key: string]: string } };
  }>;
  data?: T;
}

const apiURL = "https://opendata.cwb.gov.tw/api/v1/rest/datastore";

const weatherAxios = Axios.create({ baseURL: apiURL });

/**
 * 取得天氣預報api
 * @param
 */

export const getWeatherData = async (): Promise<Response<IWeatherData>> => {
  try {
    const { data } = await weatherAxios.request<IWeatherData>({
      url: "/O-A0003-001?Authorization=CWB-1698A141-1DE8-4E52-8DEA-49C0C11B3611",
      method: "get",
    });
    return { data };
  } catch (error: any) {
    console.log(error);
    return { error, data: undefined };
  }
};

export const getWeatherStateData = async () => {
  try {
    const { data } = await weatherAxios.request({
      url: "/F-C0032-001?Authorization=CWB-1698A141-1DE8-4E52-8DEA-49C0C11B3611",
      method: "get",
    });
    return { data };
  } catch (error: any) {
    console.log(error);
    return { error, data: undefined };
  }
};
