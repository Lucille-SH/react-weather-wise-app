import React, { useState } from "react";

import "./styles/Forecast.css";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState({ ready: false });

  function createForecastData(response) {
    console.log(response.data);
    setForecastData({
      ready: true,
      forecastImgUrl: `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      forecastDegrees: Math.round(response.data.list[0].main.temp),
      forecastTempHigh: Math.round(response.data.list[0].main.temp_max),
      forecastTempLow: Math.round(response.data.list[0].main.temp_min),
    });
  }

  function search() {
    let apiKey = "a663a922c0245163e87e27571636974e";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(createForecastData);
  }

  if (forecastData.ready === true) {
    return (
      <div className="grid">
        <div className="weatherForecastDay col-m-2.4">
          <div className="day">Thu</div>
          <img
            src={forecastData.forecastImgUrl}
            className="weatherForecastIcon"
            alt=""></img>
          <div className="weatherTemperatures">
            <span className="weatherTemperaturesHigh">
              {forecastData.forecastTempHigh}°
            </span>
            <span className="weatherTemperaturesLow">
              {forecastData.forecastTempLow}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="text-center">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#4c2b5f"
        />
      </div>
    );
  }
}
