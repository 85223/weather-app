export interface IWeatherData {
  records: {
    location: {
      lat: string;
      lon: string;
      locationName: string;
      stationId: string;
      parameter: [
        { parameterName: "CITY"; parameterValue: string },
        { parameterName: "CITY_SN"; parameterValue: string },
        { parameterName: "TOWN"; parameterValue: string },
        { parameterName: "TOWN_SN"; parameterValue: string }
      ];
      time: { obsTime: string };
      weatherElement: [
        { elementName: "ELEV"; elementValue: string },
        { elementName: "WDIR"; elementValue: string },
        { elementName: "WDSD"; elementValue: string },
        { elementName: "TEMP"; elementValue: string },
        { elementName: "HUMD"; elementValue: string },
        { elementName: "PRES"; elementValue: string },
        { elementName: "H_24R"; elementValue: string },
        { elementName: "H_FX"; elementValue: string },
        { elementName: "H_XD"; elementValue: string },
        { elementName: "H_FXT"; elementValue: string },
        { elementName: "D_TX"; elementValue: string },
        { elementName: "D_TXT"; elementValue: string },
        { elementName: "D_TN"; elementValue: string },
        { elementName: "D_TNT"; elementValue: string }
      ];
    }[];
  };
}

export interface ICurrentWeatherData {
  lat: string;
  lon: string;
  locationName: string;
  stationId: string;
  parameter: [
    { parameterName: "CITY"; parameterValue: string },
    { parameterName: "CITY_SN"; parameterValue: string },
    { parameterName: "TOWN"; parameterValue: string },
    { parameterName: "TOWN_SN"; parameterValue: string }
  ];
  time: { obsTime: string };
  weatherElement: [
    { elementName: "ELEV"; elementValue: string },
    { elementName: "WDIR"; elementValue: string },
    { elementName: "WDSD"; elementValue: string },
    { elementName: "TEMP"; elementValue: string },
    { elementName: "HUMD"; elementValue: string },
    { elementName: "PRES"; elementValue: string },
    { elementName: "H_24R"; elementValue: string },
    { elementName: "H_FX"; elementValue: string },
    { elementName: "H_XD"; elementValue: string },
    { elementName: "H_FXT"; elementValue: string },
    { elementName: "D_TX"; elementValue: string },
    { elementName: "D_TXT"; elementValue: string },
    { elementName: "D_TN"; elementValue: string },
    { elementName: "D_TNT"; elementValue: string }
  ];
}

export interface IWeatherStateData {
  locationName: string;
  weatherElement: [
    {
      elementName: "Wx";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: "晴時多雲";
            parameterValue: "2";
          };
        }
        // ...
      ];
    },
    {
      elementName: "PoP";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterUnit: "百分比";
          };
        }
        // ...
      ];
    },
    {
      elementName: "MinT";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: "23";
            parameterUnit: "C";
          };
        }
        // ...
      ];
    },
    {
      elementName: "CI";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: "舒適";
          };
        }
        // ...
      ];
    },
    {
      elementName: "MaxT";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterUnit: "C";
          };
        }
        //..
      ];
    }
  ];
}

export interface ICurrentWeatherStateData {
  locationName: string;
  weatherElement: [
    {
      elementName: "Wx";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterValue: string;
          };
        }
      ];
    },
    {
      elementName: "PoP";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterUnit: "百分比";
          };
        }
      ];
    },
    {
      elementName: "MinT";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterUnit: "C";
          };
        }
      ];
    },
    {
      elementName: "CI";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
          };
        }
      ];
    },
    {
      elementName: "MaxT";
      time: [
        {
          startTime: string;
          endTime: string;
          parameter: {
            parameterName: string;
            parameterUnit: "C";
          };
        }
        //..
      ];
    }
  ];
}
