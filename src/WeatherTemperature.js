import React from "react";
import "./styles/Main.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="mainWeatherDegrees">{props.celsius}</span>
      <span className="mainWeatherUnit">
        <strong>°C</strong>
      </span>
    </span>
  );
}
