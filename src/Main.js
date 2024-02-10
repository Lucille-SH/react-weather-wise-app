import React, { useState } from "react";
import "./styles/Main.css";
import axios from "axios";
import moment from "moment";

export default function Main() {
  let local = moment.tz.guess();

  let [city, setCity] = useState({ local });
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [date, setDate] = useState("");

  function createDate() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let day = days[now.getDay()];

    setDate(`${day} ${hours}:${minutes}`);
  }

  function createWeather(response) {
    setWeather({
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      imgUrl: response.data.condition.icon_url,
      degrees: Math.round(response.data.temperature.current),
      unit: "°C",
    });
    setLoaded(true);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(createWeather);
    createDate();
  }

  if (loaded) {
    return (
      <div>
        <div className="Search">
          <form className="searchForm">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="citySearch"
              autoFocus="on"
            />
            <input type="submit" value="Search" className="citySubmit" />
          </form>
        </div>
        <hr className="divider" />
        <main className="Main">
          <div className="mainCityDetails">
            <h1 className="mainCity">{city}</h1>
            <p>
              <span>{date}</span>,<span> {weather.condition}</span>
              <br />
              Humidity:
              <span className="humidityPercent"> {weather.humidity}%</span>,
              Wind:
              <span className="windKms"> {weather.wind}km/h</span>
            </p>
          </div>
          <div className="mainTemp">
            <div className="mainWeatherIcon">
              {" "}
              <img src={weather.imgUrl} alt="" />{" "}
            </div>
            <div className="mainWeatherDegrees">{weather.degrees}</div>
            <div className="mainWeatherUnit">{weather.unit}</div>
          </div>
        </main>
      </div>
    );
  } else {
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
        <main className="Main">
          <div className="mainCityDetails">
            <h1 className="mainCity">{city}</h1>
            <p>
              <span>{weather.currentDate}</span>,
              <span> {weather.currentCondition}</span>
              <br />
              Humidity:
              <span className="humidityPercent"> {weather.humidity}</span>,
              Wind:
              <span className="windKms"> {weather.wind}</span>
            </p>
          </div>
          <div className="mainTemp">
            <div className="mainWeatherIcon">
              {" "}
              <img src={weather.imgUrl} alt="" />{" "}
            </div>
            <div className="mainWeatherDegrees">{weather.currentDegrees}</div>
            <div className="mainWeatherUnit">{weather.unit}</div>
          </div>
        </main>
      </div>
    );
  }
}
