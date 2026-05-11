import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.25,
    tempMin: 25.05,
    tempMax: 25.99,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
