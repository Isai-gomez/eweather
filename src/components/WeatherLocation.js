import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

const WeartherLocation = () => {
  return (
    <div>
      <Location city={"Comalcalco, Tabasco."} />
      <WeatherData />
    </div>
  );
};
export default WeartherLocation;
