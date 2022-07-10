import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <WeatherForecastDay forecast={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `a5819625e2717720981216aa54bee886`;
    const apiUnits = `metric`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${apiUnits}`;
    axios.get(apiUrl).then(getForecast);
    return null;
  }
}
