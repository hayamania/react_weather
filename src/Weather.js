import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import WeatherNow from "./WeatherNow";
import WeatherForecast from "./WeatherForecast";
import PuffLoader from "react-spinners/PuffLoader";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({
    loaded: false,
  });

  function showCurrentWeather(response) {
    let sunriseTime = new Date(response.data.sys.sunrise * 1000);
    let sunsetTime = new Date(response.data.sys.sunset * 1000);
    let accessTime = new Date(response.data.dt * 1000);

    setWeather({
      loaded: true,
      coordinates: response.data.coord,
      accessedDay: `${accessTime.getDay()}`,
      accessedTime: `${accessTime.getHours()}:${accessTime.getMinutes()}`,
      city: response.data.name,
      condition: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      sunrise: `${String(sunriseTime.getHours()).padStart(2, `0`)}:${String(
        sunriseTime.getMinutes()
      ).padStart(2, `0`)}`,
      sunset: `${String(sunsetTime.getHours()).padStart(2, `0`)}:${String(
        sunsetTime.getMinutes()
      ).padStart(2, `0`)}`,
    });
  }

  function searchApi() {
    const apiKey = `a5819625e2717720981216aa54bee886`;
    const apiUnits = `metric`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
    axios.get(apiUrl).then(showCurrentWeather);
  }

  function getWeather(event) {
    event.preventDefault();
    searchApi();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <form onSubmit={getWeather}>
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                onChange={updateCity}
              />
              <input type="submit" value={"Search"} />
            </form>
          </div>
          <WeatherNow data={weather} />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    searchApi();
    return (
      <div className="Weather">
        <h2 className="text-center">Loading...</h2>
        <PuffLoader loading={true} className="loader" color="#8d99ae" />
      </div>
    );
  }
}
