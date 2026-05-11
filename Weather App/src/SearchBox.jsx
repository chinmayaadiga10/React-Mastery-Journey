import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`,
    );
    let responseJSON = await response.json();
    console.log(responseJSON);

    let result = {
      city: city,
      temp: responseJSON.main.temp,
      tempMin: responseJSON.main.temp_min,
      tempMax: responseJSON.main.temp_max,
      humidity: responseJSON.main.humidity,
      feelsLike: responseJSON.main.feels_like,
      weather: responseJSON.weather[0].description,
    };
    console.log(result);
    return result;
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo(city);
    updateInfo(newInfo);
  };
  return (
    <div>
      <h2>Search for the Weather</h2>
      <div className="SearchBox">
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City name"
            variant="outlined"
            required
            value={city}
            onChange={changeCity}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
