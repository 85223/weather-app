import { Row, Col } from "antd";
import classes from "./WeatherApp.module.sass";
import { useWeatherCotext } from "../../Context/Weather";
import { useEffect, useState } from "react";
import { ICurrentWeatherData, ICurrentWeatherStateData } from "../../interface";
import dayIcon from "../../images/weather_fog_mist_day_cloud_sun_coudy.svg";
import rainIcon from "../../images/rain.svg";
import windIcon from "../../images/wind.svg";
import { availableLocations } from "../../utils";
import Loading from "../Loading";
import WeatherIcon from "../WeatherIcon";

interface ILocation {
  cityName: string;
  locationName: string;
  sunriseCityName: string;
}

const WeatherApp = () => {
  const { weatherData, weatherStateData } = useWeatherCotext();
  const [currentLocation, setCurrentLocation] = useState<ICurrentWeatherData | undefined>(
    undefined
  );
  const [currentLocationState, setCurrentLocationState] = useState<
    ICurrentWeatherStateData | undefined
  >(undefined);
  const [location, setLocation] = useState<ILocation>({
    cityName: "桃園市",
    locationName: "新屋",
    sunriseCityName: "桃園",
  });
  const [ready, setReady] = useState<boolean>(false);

  const locationHandler = (_cityName: string) => {
    const currentLocation = availableLocations.filter(
      (location) => location.cityName === _cityName
    )[0];
    console.log("currentLocation", currentLocation);

    setLocation(currentLocation);
  };
  const weatherStateDataHandler = () => {
    if (weatherStateData) {
      const _currentLocation = weatherStateData.filter(
        (item) => item.locationName === location.cityName
      )[0];
      setCurrentLocationState(_currentLocation);
      console.log(_currentLocation);
    }
  };
  const weatherDataHandler = () => {
    if (weatherData) {
      const currentLocation = weatherData.filter(
        (item) => item.locationName === location.locationName
      )[0];
      console.log(currentLocation);
      setCurrentLocation(currentLocation);
    }
  };

  useEffect(() => {
    setReady(false);
    if (weatherData && weatherStateData) {
      weatherDataHandler();
      weatherStateDataHandler();
      setReady(true);
    }
  }, [location, weatherData, weatherStateData]);

  return (
    <Row justify="center" align="middle">
      {ready ? (
        <Col span={20} sm={15} md={10} className={classes.container}>
          <h1 className={classes.title}>
            <select
              className={classes.select}
              value={location.cityName}
              onChange={(e) => {
                locationHandler(e.target.value);
              }}
            >
              {availableLocations.map((location, index) => (
                <option key={index}>{location.cityName}</option>
              ))}{" "}
            </select>
          </h1>
          <h3 className={classes.description}>
            {currentLocationState?.weatherElement[0].time[0].parameter.parameterName}
          </h3>
          <div className={classes.weatherCard}>
            <div className={classes.currentWeather}>
              <div className={classes.temp}>
                {`${Math.round(Number(currentLocation?.weatherElement[3].elementValue))}`}
                <div className={classes.celsius}>°C</div>
              </div>
              {/* <div className={classes.weatherImg}>
                <img src={dayIcon} alt="" />
              </div> */}
              <WeatherIcon
                weatherCode={
                  currentLocationState?.weatherElement[0].time[0].parameter.parameterValue
                }
                moment="night"
              />
            </div>{" "}
            <div className={classes.airFlow}>
              <div className={classes.airFlowIcon}>
                <img src={windIcon} alt="" />
              </div>
              <div className={classes.content}>
                {currentLocation?.weatherElement[2].elementValue + "m/h"}
              </div>
            </div>
            <div className={classes.rain}>
              <div className={classes.rainIcon}>
                <img src={rainIcon} alt="" />{" "}
              </div>
              <div className={classes.content}>
                {`${Math.round(
                  Number(currentLocationState?.weatherElement[1].time[0].parameter.parameterName)
                )} %`}
              </div>
            </div>
          </div>
          <div className={classes.reload}>
            <div>
              最後觀測時間：
              {currentLocation &&
                new Intl.DateTimeFormat("zh-TW", {
                  hour: "numeric",
                  minute: "numeric",
                }).format(new Date(currentLocation?.time.obsTime))}
            </div>
          </div>
        </Col>
      ) : (
        <Loading />
      )}
    </Row>
  );
};

export default WeatherApp;
