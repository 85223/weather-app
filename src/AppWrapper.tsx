import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./Routes";
import WeatherProvider from "./Context/Weather";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Weather APP</title>
        <meta name="description" content="Weather APP" />
      </Helmet>
      <WeatherProvider>
        <CustomRoutes />
      </WeatherProvider>
    </BrowserRouter>
  );
};
export default AppWrapper;
