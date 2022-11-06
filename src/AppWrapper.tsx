import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./Routes";
import CreateWeatherProvider from "./Context/Weather";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Weather APP</title>
        <meta name="description" content="Weather APP" />
      </Helmet>
      <CreateWeatherProvider>
        <CustomRoutes />
      </CreateWeatherProvider>
    </BrowserRouter>
  );
};
export default AppWrapper;
