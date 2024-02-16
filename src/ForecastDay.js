import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.main.temp_max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.main.temp_min);
    return `${minTemp}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let forecastDay = days[date.getDay()];

    return forecastDay;
  }

  return (
    <div className="weatherForecastDay col-sm m-1">
      <div className="day">{day()}</div>
      <img src={props.img} className="weatherForecastIcon" alt=""></img>
      <div className="weatherTemperatures">
        <span className="weatherTemperaturesHigh">{maxTemperature()}</span>
        <span className="weatherTemperaturesLow"> {minTemperature()}</span>
      </div>
    </div>
  );
}
