import React from "react";
import FormatDate from "./FormatDate";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
} from "weather-icons-react";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-3">
            <h1 className="ps-2">{props.data.city}</h1>
          </div>
          <div className="col-sm-9 pt-1">
            <ul>
              <li>
                Last update: <FormatDate date={props.data.accessedDay} />{" "}
                {props.data.accessedTime}
              </li>
              <li>{props.data.condition}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img src={props.data.icon} />
          </div>
          <div className="col-sm-5">
            <span className="temperature ps-2">{props.data.temp}</span>
            <span className="units">°C | °F</span>
          </div>
          <div className="col-sm-3">
            <ul>
              <li>
                <WiHumidity size={24} className="icons" />
                Humidity: {props.data.humidity}%
              </li>
              <li>
                <WiStrongWind size={24} className="icons" />
                Wind: {props.data.wind} km/h
              </li>
              <li>
                <WiSunrise size={24} className="icons" />
                Sunrise: {props.data.sunrise}
              </li>
              <li>
                <WiSunset size={24} className="icons" />
                Sunset: {props.data.sunset}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
