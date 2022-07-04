import React, { useState, CSSProperties } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
} from "weather-icons-react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({
    loaded: true,
    accessedTime: `Mon 10:20`,
    city: props.defaultCity,
    condition: `Sunny`,
    icon: `http://openweathermap.org/img/wn/10d.png`,
    temp: 23,
    humidity: 70,
    wind: 7,
    sunrise: `06:12`,
    sunset: `19:07`,
  });
  const apiKey = `a5819625e2717720981216aa54bee886`;
  const apiUnits = `metric`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;

  function showCurrentWeather(response) {
    let sunriseTime = new Date(response.data.sys.sunrise * 1000);
    let sunsetTime = new Date(response.data.sys.sunset * 1000);
    let accessTime = new Date(response.data.dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    setWeather({
      loaded: true,
      accessedTime: `${
        days[accessTime.getDay()]
      } ${accessTime.getHours()}:${accessTime.getMinutes()}`,
      city: response.data.name,
      condition: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
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

  function getWeather(event) {
    event.preventDefault();
    axios.get(apiUrl).then(showCurrentWeather);
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
          <div className="row mt-2">
            <div className="col-sm-3">
              <h1 className="ps-2">{weather.city}</h1>
            </div>
            <div className="col-sm-9 pt-1">
              <ul>
                <li>Last update: {weather.accessedTime}</li>
                <li>{weather.condition}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img src={weather.icon} />
            </div>
            <div className="col-sm-5">
              <span className="temperature ps-2">{weather.temp}</span>
              <span className="units">°C | °F</span>
            </div>
            <div className="col-sm-3">
              <ul>
                <li>
                  <WiHumidity size={24} className="icons" />
                  Humidity: {weather.humidity}%
                </li>
                <li>
                  <WiStrongWind size={24} className="icons" />
                  Wind: {weather.wind} km/h
                </li>
                <li>
                  <WiSunrise size={24} className="icons" />
                  Sunrise: {weather.sunrise}
                </li>
                <li>
                  <WiSunset size={24} className="icons" />
                  Sunset: {weather.sunset}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h2 className="text-center">Loading...</h2>
        <PuffLoader loading={true} className="loader" color="#8d99ae" />
      </div>
    );
  }
}
