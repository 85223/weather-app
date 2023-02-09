// import DayThunderstorm from " ./images/day-thunderstorm.svg";
import DayThunderstorm from "../../images/day-thunderstorm.svg";
import DayClear from "../../images/day-clear.svg";
import DayCloudyFog from "../../images/day-cloudy-fog.svg";
import DayCloudy from "../../images/day-cloudy.svg";
import DayFog from "../../images/day-fog.svg";
import DayPartiallyClearWithRain from "../../images/day-partially-clear-with-rain.svg";
import DaySnowing from "../../images/day-snowing.svg";
import NightThunderstorm from "../../images/night-thunderstorm.svg";
import NightClear from "../../images/night-clear.svg";
import NightCloudyFog from "../../images/night-cloudy-fog.svg";
import NightCloudy from "../../images/night-cloudy.svg";
import NightFog from "../../images/night-fog.svg";
import NightPartiallyClearWithRain from "../../images/night-partially-clear-with-rain.svg";
import NightSnowing from "../../images/night-snowing.svg";
import classes from "./WeatherIcon.module.sass";
import { useEffect, useState } from "react";
import { log } from "console";

interface IWeatherIcon {
  weatherCode: string | undefined;
  moment: "night" | "day";
}
interface IWeatherIconType {
  weatherIconType:
    | "isThunderstorm"
    | "isClear"
    | "isCloudy"
    | "isPartiallyClearWithRain"
    | "isSnowing";
}

const WeatherIcon = ({ weatherCode, moment }: IWeatherIcon) => {
  const weatherTypesConfig = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
    isSnowing: [23, 37, 42],
  };

  const weatherIconsConfig = {
    day: {
      isThunderstorm: <DayThunderstorm />,
      isClear: <DayClear />,
      isCloudyFog: <DayCloudyFog />,
      isCloudy: <DayCloudy />,
      isFog: <DayFog />,
      isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
      isSnowing: <DaySnowing />,
    },
    night: {
      isThunderstorm: <NightThunderstorm />,
      isClear: <NightClear />,
      isCloudyFog: <NightCloudyFog />,
      isCloudy: <NightCloudy />,
      isFog: <NightFog />,
      isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
      isSnowing: <NightSnowing />,
    },
  };

  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<IWeatherIconType>({
    weatherIconType: "isClear",
  });

  useEffect(() => {
    console.log(weatherCode);
    const currentWeatherCode = Number(weatherCode);

    const CurrentweatherType = (weatherCode: number) => {
      const [weatherType] =
        Object.entries(weatherTypesConfig).find(([weatherType, weatherCodes]) =>
          weatherCodes.includes(weatherCode)
        ) || [];

      return weatherType;
    };

    if (CurrentweatherType(currentWeatherCode) !== undefined) {
      const temp = CurrentweatherType(currentWeatherCode) as
        | "isThunderstorm"
        | "isClear"
        | "isCloudy"
        | "isPartiallyClearWithRain"
        | "isSnowing";
      console.log(temp);
      setCurrentWeatherIcon({ weatherIconType: temp });
    }
  }, [weatherCode]);

  useEffect(() => {
    console.log(weatherIconsConfig[moment][currentWeatherIcon.weatherIconType]);
  }, [currentWeatherIcon]);

  return (
    <div className={classes.weatherImg}>
      <img src={weatherIconsConfig[moment][currentWeatherIcon.weatherIconType].type} alt="" />
    </div>
  );
};
export default WeatherIcon;
