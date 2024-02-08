import React from "react";
import "./styles/Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="searchForm">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="citySearch"
        />
        <input type="submit" value="Search" className="citySubmit" />
      </form>
    </div>
  );
}
