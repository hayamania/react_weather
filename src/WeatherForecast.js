import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = `a5819625e2717720981216aa54bee886`;
  const apiUnits = `metric`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${apiUnits}`;

  function getForecast(response) {
    console.log(response);
  }

  axios.get(apiUrl).then(getForecast);

  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Mon</h1>
            <WeatherIcon code={"02d"} size={50} />
            <div className="temperatures">
              <span className="temperature-max">27°</span>{" "}
              <span className="temperature-min">15°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
