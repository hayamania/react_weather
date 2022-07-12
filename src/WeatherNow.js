import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
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
          <div className="col-sm-4">
            <h1 className="ps-2">{props.data.city}</h1>
          </div>
          <div className="col-sm-8 pt-1">
            <ul>
              <li>
                Last update: <FormatDate date={props.data.accessedDay} />{" "}
                {props.data.accessedTime}
              </li>
              <li>{props.data.condition}</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4">
            <WeatherIcon code={props.data.icon} size={90} />
          </div>
          <div className="col-sm-5">
            <WeatherTemp temp={props.data.temp} />
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
