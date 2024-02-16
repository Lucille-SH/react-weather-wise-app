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
      <span className="WeatherTemperature">
        <span className="mainWeatherDegrees">{props.celsius}</span>
        <span className="mainWeatherUnit">
          <strong>°C</strong> |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="mainWeatherDegrees">{Math.round(fahrenheit())}</span>
        <span className="mainWeatherUnit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | <strong>°F</strong>
        </span>
      </span>
    );
  }
}
