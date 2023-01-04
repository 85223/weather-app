import { Row, Col, Select } from "antd";
import classes from "./WeatherApp.module.sass";
import { weatherContext } from "../../Context/Weather";
import { useContext, useEffect, useState } from "react";
import { IWeatherData, ICurrentWeatherData } from "../../interface";
import dayIcon from "../../images/weather_fog_mist_day_cloud_sun_coudy.svg";
import rainIcon from "../../images/rain.svg";
import windIcon from "../../images/wind.svg";
import reloadIcon from "../../images/reload.svg";

const WeatherApp = () => {
  const { Option } = Select;
  const weatherData = useContext(weatherContext);
  const [currentLocation, setCurrentLocation] = useState<
    ICurrentWeatherData | undefined
  >(undefined);
  console.log("weatherData", weatherData);

  const onChange = (e: string) => {
    const currentLocationIndex = weatherData?.records.location.findIndex(
      (_location) => _location.locationName === e
    );
    if (!currentLocationIndex) return;
    const currentLocationData =
      weatherData?.records.location[currentLocationIndex];
    console.log("currentLocationIndex", currentLocationIndex);

    console.log("currentLocationData", currentLocationData);
    if (currentLocationData !== undefined)
      setCurrentLocation(currentLocationData);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={20} sm={10} xs={15} className={classes.container}>
        <h1 className={classes.title}>台北市</h1>
        <h3 className={classes.description}>多雲時晴</h3>
        <div className={classes.weatherCard}>
          <div className={classes.currentWeather}>
            <div className={classes.temp}>
              26
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
            <div className={classes.content}>23 m/h </div>
          </div>
          <div className={classes.rain}>
            <div className={classes.rainIcon}>
              <img src={rainIcon} alt="" />
            </div>
            <div className={classes.content}>48 %</div>
          </div>
        </div>
        <div className={classes.reload}>
          <img src={reloadIcon} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default WeatherApp;
