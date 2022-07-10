import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="row">
          <h1>Mon</h1>
          <WeatherIcon code={"02d"} />
          <div className="temperatures">
            <span className="temperature-max">27°</span>{" "}
            <span className="temperature-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
