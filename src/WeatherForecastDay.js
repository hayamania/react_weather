import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import { WiSunrise, WiSunset } from "weather-icons-react";

export default function WeatherForecastDay(props) {
  let data = {
    day: new Date(props.forecast.dt * 1000).getDay(),
    icon: props.forecast.weather[0].icon,
    temp_max: Math.round(props.forecast.temp.max),
    temp_min: Math.round(props.forecast.temp.min),
    sunrise: `${String(
      new Date(props.forecast.sunrise * 1000).getHours()
    ).padStart(2, `0`)}:${String(
      new Date(props.forecast.sunrise * 1000).getMinutes()
    ).padStart(2, `0`)}`,
    sunset: `${String(
      new Date(props.forecast.sunset * 1000).getHours()
    ).padStart(2, `0`)}:${String(
      new Date(props.forecast.sunset * 1000).getMinutes()
    ).padStart(2, `0`)}`,
  };
  return (
    <div className="WeatherForecastDay">
      <h1>
        <FormatDate date={data.day} />
      </h1>
      <WeatherIcon code={data.icon} size={50} />
      <div className="temperatures mb-1">
        <span className="temperature-max">{data.temp_max}°</span>{" "}
        <span className="temperature-min">{data.temp_min}°</span>
      </div>
      <div className="sunrise">
        <WiSunrise size={20} className="icons" /> {data.sunrise}
      </div>
      <div className="sunset">
        <WiSunset size={20} className="icons" /> {data.sunset}
      </div>
    </div>
  );
}
