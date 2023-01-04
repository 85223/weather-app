import { Route, Routes } from "react-router-dom";
// import WeatherApp from "./components/WeatherApp/WeatherApp";
import WeatherApp from "./components/WeatherApp/WeatherApp";

// import WeatherApp from "./components/WeatherApp/"

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />} />
    </Routes>
  );
};
export default CustomRoutes;
