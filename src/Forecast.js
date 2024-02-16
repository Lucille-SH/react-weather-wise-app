import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./styles/Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [forecastData, setForecastData] = useState({ ready: false });
  let [forecastImg, setForecastImg] = useState("");
  let [ready, setReady] = useState(false);

  if (ready.true) {
    return (
      <div className="grid Forecast">
        <div className="row weatherForecast">
          <ForecastDay data={forecastData[0]} img={forecastImg[0].icon} />
          <ForecastDay data={forecastData[1]} img={forecastImg[1].icon} />
          <ForecastDay data={forecastData[2]} img={forecastImg[2].icon} />
          <ForecastDay data={forecastData[3]} img={forecastImg[3].icon} />
          <ForecastDay data={forecastData[4]} img={forecastImg[4].icon} />

          {/* {forecastData.map(function (DailyForecast, index) {
          if (index < 5) {
            return (
              <div className="row weatherForecast" key={index}>
                <ForecastDay data={DailyForecast} img={forecastImg.icon} />
              </div>
            );
          }
        })} */}
        </div>
      </div>
    );
  } else {
    search();

    function search() {
      let apiKey = "a663a922c0245163e87e27571636974e";
      let city = props.city;
      let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
      axios.get(forecastApiUrl).then(createForecastData);
    }

    function createForecastData(response) {
      console.log(response.data.list);
      setReady(true);
      setForecastData(response.data.list);
      setForecastImg(response.data.list.weather);
    }
    return null;
  }
}
