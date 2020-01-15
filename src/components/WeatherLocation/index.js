import React, { Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import {
  SUN,
  WINDY,
} from './../../constants/weathers';
/*Objeto con los datos de la temperatura que se
  envian al componente WeatherData.
*/ 
const data = {
  temperature: 9,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}
const data2 = {
  temperature: 34,
  weatherState: WINDY,
  humidity: 30,
  wind: '15 m/s',
}

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city:"Tabasco",
      data:data
    }
  }
  handlerUpdateClick = () => {
    this.setState({
      city:"Comalcalco",
      data:data2,
    })
  }
  render(){
    const { city, data } = this.state;
  return (
    <div className="weatherLocationCont">
      <Location city={city} />
      <WeatherData data={data}/>
      <button onClick={this.handlerUpdateClick}>Update</button>
    </div>
  );
  }
};
export default WeatherLocation;
