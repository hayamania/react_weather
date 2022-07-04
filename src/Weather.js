import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Container">
        <h1>Perth</h1>
        <p>icon</p>
        <p>12</p>
        <p>°C | °F</p>
        <p>Humidity</p>
        <p>Wind</p>
        <p>Sunrise</p>
        <p>Sunset</p>
      </div>
    </div>
  );
}
