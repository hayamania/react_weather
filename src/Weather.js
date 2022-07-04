import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import {
  WiDaySunny,
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
} from "weather-icons-react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Container">
        <div className="row">
          <form>
            <input type="search" placeholder="Type a city..." autoFocus="on" />
            <input type="submit" value={"Search"} />
          </form>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3">
            <h1>Perth</h1>
          </div>
          <div className="col-sm-9">
            <ul>
              <li>Last update: 10:20</li>
              <li>Sunny</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <WiDaySunny size={100} className="icons" />
          </div>
          <div className="col-sm-4">
            <span className="temperature">12</span>
            <span className="units">°C | °F</span>
          </div>
          <div className="col-sm-4">
            <ul>
              <li>
                <WiHumidity size={24} className="icons" />
                Humidity
              </li>
              <li>
                <WiStrongWind size={24} className="icons" />
                Wind
              </li>
              <li>
                <WiSunrise size={24} className="icons" />
                Sunrise
              </li>
              <li>
                <WiSunset size={24} className="icons" />
                Sunset
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
