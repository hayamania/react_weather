import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import axios from "axios";
import { WiSunrise, WiSunset } from "weather-icons-react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <FormatDate date={forecast.day} />
              </h1>
              <WeatherIcon code={forecast.icon} size={50} />
              <div className="temperatures mb-1">
                <span className="temperature-max">{forecast.temp_max}°</span>{" "}
                <span className="temperature-min">{forecast.temp_min}°</span>
              </div>
              <div className="sunrise">
                <WiSunrise size={20} className="icons" /> {forecast.sunrise}
              </div>
              <div className="sunset">
                <WiSunset size={20} className="icons" /> {forecast.sunset}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `a5819625e2717720981216aa54bee886`;
    const apiUnits = `metric`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${apiUnits}`;
    function getForecast(response) {
      console.log(response.data.daily[0].weather[0].icon);
      setForecast({
        day: new Date(response.data.daily[0].dt * 1000).getDay(),
        icon: response.data.daily[0].weather[0].icon,
        temp_max: Math.round(response.data.daily[0].temp.max),
        temp_min: Math.round(response.data.daily[0].temp.min),
        sunrise: `${String(
          new Date(response.data.daily[0].sunrise * 1000).getHours()
        ).padStart(2, `0`)}:${String(
          new Date(response.data.daily[0].sunrise * 1000).getMinutes()
        ).padStart(2, `0`)}`,
        sunset: `${String(
          new Date(response.data.daily[0].sunset * 1000).getHours()
        ).padStart(2, `0`)}:${String(
          new Date(response.data.daily[0].sunset * 1000).getMinutes()
        ).padStart(2, `0`)}`,
      });
      setLoaded(true);
    }
    axios.get(apiUrl).then(getForecast);
    return null;
  }
}
