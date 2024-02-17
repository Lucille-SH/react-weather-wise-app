import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

import "./styles/Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState("");
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function createForecastData(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="grid Forecast">
        <div className="row weatherForecast">
          {forecastData.map(function (DailyForecast, index) {
            if (index < 5) {
              return (
                <div className="weatherForecastDay col-sm m-1" key={index}>
                  <ForecastDay data={DailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "2bd326a60dc89a53287e446e819664df";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(createForecastData);

    return null;
  }
}
