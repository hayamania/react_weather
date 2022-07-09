import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState(props.unit);

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature ps-2">{props.temp}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={toFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature ps-2">
          {Math.round((props.temp * 9) / 5 + 32)}
        </span>
        <span className="units">
          <a href="/" onClick={toCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
