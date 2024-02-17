import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Main.css";

import MainWeather from "./MainWeather";
import Forecast from "./Forecast";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Main(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function createWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      degrees: Math.round(response.data.main.temp),
    });
  }

  function search() {
    let apiKey = "2bd326a60dc89a53287e446e819664df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(createWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value.trim());
  }

  if (weather.ready) {
    return (
      <div>
        <div className="Search">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="citySearch"
              autoFocus="on"
              onChange={handleChange}
            />
            <input type="submit" value="Search" className="citySubmit" />
          </form>
        </div>
        <hr className="divider" />
        <MainWeather data={weather} city={city} />
        <Forecast coordinates={weather.coordinates} />
        <hr className="divider" />
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
