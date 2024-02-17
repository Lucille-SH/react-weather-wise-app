import React from "react";

export default function ForecastImage(props) {
  const code = `https://openweathermap.org/img/wn/${props.code}@2x.png`;
  return <img src={code} className="weatherForecastIcon" alt=""></img>;
}
