import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/Lucille-SH"
          target="_blank"
          rel="noreferrer">
          Lucille Shankland
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/Lucille-SH/react-weather-wise-app"
          target="_blank"
          rel="noreferrer">
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weatherwisereact.netlify.app/"
          target="_blank"
          rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
