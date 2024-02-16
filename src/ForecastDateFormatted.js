export default function ForecastDateFormatted(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[props.date.getDay()];

  return <span>{day}</span>;
}
