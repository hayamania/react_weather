import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import { WiDaySunny } from "weather-icons-react";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Container">
        <div className="row">
          <form>
            <input type="search" placeholder="Type a city..." />
            <input type="submit" value={"Search"} />
          </form>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>Perth</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <WiDaySunny size={70} className="icons" />
          </div>
          <div className="col-sm-4">
            <h2>12</h2>
            <p>°C | °F</p>
          </div>
          <div className="col-sm-4">
            <p>
              <WiHumidity size={24} className="icons" />
              Humidity
            </p>
            <p>
              <WiStrongWind size={24} className="icons" />
              Wind
            </p>
            <p>
              <WiSunrise size={24} className="icons" />
              Sunrise
            </p>
            <p>
              <WiSunset size={24} className="icons" />
              Sunset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
