import React from "react";
import "./styles/Forecast.css";
import ForecastImage from "./ForecastImage";

export default function ForecastDay(props) {
  function maxTemperature() {
    console.log(props.data.temp.max);
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    console.log(props.data.temp.min);
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <ForecastImage code={props.data.weather[0].icon} />
      <div className="weatherTemperatures">
        <span className="weatherTemperaturesHigh">{maxTemperature()}</span>
        <span className="weatherTemperaturesLow"> {minTemperature()}</span>
      </div>
    </div>
  );
}
