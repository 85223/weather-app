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
