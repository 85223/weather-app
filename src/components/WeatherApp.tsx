import { Row, Col, Select } from "antd";
import classes from "./WeatherApp.module.sass";
import { weatherContext } from "../Context/Weather";
import { useCallback, useContext, useEffect, useState } from "react";
import rain from "../images/rain.svg";
import { ListFormat } from "typescript";

interface Wx {
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
}

interface Pop {
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
}

interface Min {
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
}

interface CI {
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
}

interface Max {
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

type locationData = [Wx, Pop, Min, CI, Max];

// interface locationData {}

const WeatherApp = () => {
  const { Option } = Select;
  const weatherData = useContext(weatherContext);
  const [currentLocation, setCurrentLocation] = useState<string>("臺北市");
  const [currentData, setCurrentData] = useState<locationData | undefined>();
  console.log("weatherData", weatherData);

  useEffect(() => {
    console.log("ldkfldkf");

    if (weatherData) {
      const index = weatherData.location.findIndex(
        (item) => item.locationName === currentLocation
      );
      if (index !== undefined) {
        const { weatherElement } = weatherData.location[index];
        setCurrentData(weatherElement);
      }
    }
  }, [weatherData]);

  const onChange = (e: string) => {
    setCurrentLocation(e);

    if (weatherData) {
      const index = weatherData?.location.findIndex(
        (item) => item.locationName === e
      );
      console.log(index);

      if (index !== undefined) {
        const { locationName, weatherElement } = weatherData.location[index];
        console.log(locationName);
        console.log(weatherElement);

        setCurrentData(weatherElement);
      }
    }
  };

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  return (
    <Row justify="center" align="middle">
      <Col span={20} className={classes.container}>
        <div>
          <h1 className={classes.title}>天氣預報</h1>
        </div>
        <div className={classes.weatherCard}>
          <p className={classes.content}>
            溫度：
            {currentData?.[2].time[1].parameter.parameterName} -
            {currentData?.[4].time[1].parameter.parameterName}
          </p>
          <p className={classes.content}>
            {currentData?.[3].time[0].parameter.parameterName}
          </p>
          <p className={classes.content}>
            降雨機率：
            {currentData?.[1].time[0].parameter.parameterName}%
          </p>
          <Select
            className={classes.locationSelect}
            defaultValue={"台北市"}
            onChange={(e) => onChange(e)}
            value={currentLocation}
          >
            {weatherData?.location.map((item, index) => (
              <Option key={index} value={item.locationName}>
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
