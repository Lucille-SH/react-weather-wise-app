import React, { useState } from "react";

export default function ForecastDay(props) {
  // let [imgUrl, setImgUrl] = useState("");

  // function image() {
  //   setImgUrl({
  //     imgUrl: `https://openweathermap.org/img/wn/${props}@2x.png`,
  //   });
  // }

  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let date = new Date(props.data.dt * 1000);
    let forecastDay = days[date.getDay()];

    return forecastDay;
  }

  return (
    <div className="weatherForecastDay col-sm m-1">
      <div className="day">{day()}</div>
      <img
        src="https://openweathermap.org/img/wn/$10d@2x.png"
        className="weatherForecastIcon"
        alt=""></img>
      <div className="weatherTemperatures">
        <span className="weatherTemperaturesHigh">{maxTemperature()}</span>
        <span className="weatherTemperaturesLow"> {minTemperature()}</span>
      </div>
    </div>
  );
}
