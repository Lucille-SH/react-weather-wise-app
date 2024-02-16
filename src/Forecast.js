import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./styles/Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState("");
  let [ready, setReady] = useState(false);

  function createForecastData(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready === true) {
    return (
      <div className="grid Forecast">
        {forecastData.map(function (DailyForecast, index) {
          if (index < 5) {
            return (
              <div className="row weatherForecast" key={index}>
                <ForecastDay data={DailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "2bd326a60dc89a53287e446e819664df";
    let latitude = props.latitude;
    let longitude = props.longitude;
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(createForecastData);

    return null;
  }
}
