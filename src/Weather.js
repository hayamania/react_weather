import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Container">
        <div className="row">
          <form>
            <input type="search" placeholder="Type a city..." />
            <input type="submit" value={"Search"} className="btn btn-primary" />
          </form>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>Perth</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>icon</p>
            <h2>12</h2>
            <p>°C | °F</p>
          </div>
          <div className="col-sm-6">
            <p>Humidity</p>
            <p>Wind</p>
            <p>Sunrise</p>
            <p>Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}
