import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';

const WeatherLocation = () => {
  return (
    <div className="weatherLocationCont">
      <Location city={"Tabasco"} />
      <WeatherData />
    </div>
  );
};
export default WeatherLocation;
