import React, { useState } from "react";
import "./styles/Main.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature mainTemp">
        <div className="mainWeatherDegrees">{props.celsius}</div>
        <div className="mainWeatherUnit">
          <strong>°C</strong> |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature mainTemp">
        <div className="mainWeatherDegrees">{Math.round(fahrenheit())}</div>
        <div className="mainWeatherUnit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | <strong>°F</strong>
        </div>
      </span>
    );
  }
}
