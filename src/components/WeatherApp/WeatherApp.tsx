import { Row, Col, Select } from "antd";
import classes from "./WeatherApp.module.sass";
import { useWeatherCotext } from "../../Context/Weather";
import { useEffect, useState } from "react";
import { ICurrentWeatherData, ICurrentWeatherStateData } from "../../interface";
import dayIcon from "../../images/weather_fog_mist_day_cloud_sun_coudy.svg";
import rainIcon from "../../images/rain.svg";
import windIcon from "../../images/wind.svg";
import reloadIcon from "../../images/reload.svg";

const WeatherApp = () => {
  const { Option } = Select;
  const { weatherData, weatherStateData } = useWeatherCotext();

  const [currentLocation, setCurrentLocation] = useState<
    ICurrentWeatherData | undefined
  >(undefined);
  const [currentLocationStateData, setCurrentLocationStateData] = useState<
    ICurrentWeatherStateData | undefined
  >(undefined);
  // console.log("weatherData", weatherData);

  useEffect(() => {
    if (weatherData !== undefined) {
      const currntLocationData = weatherData.filter(
        (item) => item.locationName === "桃園"
      )[0];
      console.log("currntLocationData", currntLocationData);
      setCurrentLocation(currntLocationData);
    }
  }, [weatherData]);

  useEffect(() => {
    if (weatherStateData) {
      console.log(weatherStateData);

      const currentLocationStateData = weatherStateData.filter(
        (item) => item.locationName === "桃園市"
      )[0];
      console.log(currentLocationStateData.weatherElement);

      setCurrentLocationStateData(currentLocationStateData);
    }
  }, [weatherStateData]);

  return (
    <Row justify="center" align="middle">
      <Col span={20} sm={15} md={10} className={classes.container}>
        <h1 className={classes.title}>{currentLocation?.locationName}</h1>
        <h3 className={classes.description}>
          {
            currentLocationStateData?.weatherElement[0].time[0].parameter
              .parameterName
          }
        </h3>
        <div className={classes.weatherCard}>
          <div className={classes.currentWeather}>
            <div className={classes.temp}>
              {`${Math.round(
                Number(currentLocation?.weatherElement[3].elementValue)
              )}`}
              <div className={classes.celsius}>°C</div>
            </div>
            <div className={classes.weatherImg}>
              <img src={dayIcon} alt="" />
            </div>
          </div>
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
              <img src={rainIcon} alt="" />
            </div>
            <div className={classes.content}>
              {`${Math.round(
                Number(
                  currentLocationStateData?.weatherElement[1].time[0].parameter
                    .parameterName
                )
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
            {/* {currentLocation?.time.obsTime} */}
          </div>
          <img src={reloadIcon} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default WeatherApp;
