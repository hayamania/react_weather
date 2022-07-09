import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temperature ps-2">{props.temp}</span>
      <span className="units">°C | °F</span>
    </div>
  );
}
