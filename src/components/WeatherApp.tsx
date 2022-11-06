import { Row, Col, Select } from "antd";
import classes from "./WeatherApp.module.sass";
import { weatherContext, weatherDataType } from "../Context/Weather";
import { useCallback, useContext, useEffect, useState } from "react";

interface locationData {
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

interface Wx {
  startTime: string;
  endTime: string;
  parameter: { parameterName: string; parameterValue: string };
}

const WeatherApp = () => {
  const { Option } = Select;
  const weatherData = useContext(weatherContext);
  const [currentLocation, setCurrentLocation] = useState<string>("臺北市");
  const [currentData, setCurrentData] = useState<locationData>();
  const [Wx, setWx] = useState<Wx[]>([]);

  if (weatherData) {
    if (weatherData.records.location) {
      console.log(weatherData?.records.location[0]);
    }
  }

  const onChange = (e: string) => {
    setCurrentLocation(e);
  };

  return (
    <Row justify="center" align="middle">
      <Col span={20} className={classes.container}>
        <div>
          <h1 className={classes.title}>天氣預報</h1>
        </div>
        <div className={classes.weatherCard}>
          <div>
            {
              weatherData?.records.location[
                weatherData.records.location.findIndex(
                  (item) => item.locationName === currentLocation
                )
              ].weatherElement[2].time[0].parameter.parameterName
            }
            -
            {
              weatherData?.records.location[
                weatherData.records.location.findIndex(
                  (item) => item.locationName === currentLocation
                )
              ].weatherElement[4].time[0].parameter.parameterName
            }
          </div>
          <div>
            {
              weatherData?.records.location[
                weatherData.records.location.findIndex(
                  (item) => item.locationName === currentLocation
                )
              ].weatherElement[0].time[0].parameter.parameterName
            }
          </div>
          <div>
            降雨機率：
            {
              weatherData?.records.location[
                weatherData.records.location.findIndex(
                  (item) => item.locationName === currentLocation
                )
              ].weatherElement[1].time[0].parameter.parameterName
            }
          </div>
          <Select
            className={classes.locationSelect}
            defaultValue={"台北市"}
            onChange={(e) => onChange(e)}
            value={currentLocation}
          >
            {weatherData?.records?.location?.map((item) => (
              <Option key={item.locationName} value={item.locationName}>
                {item.locationName}
              </Option>
            ))}
          </Select>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherApp;
