import React, { Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import getData from '../../services/transforWeather';
import { api_weather } from './../../constants/api_url';//constande de la api
/*Objeto con los datos de la temperatura que se
  envian al componente WeatherData.
*/ 

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city:"Tabasco",
      data:null
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }
  
  
  handleUpdateClick = () => {
    fetch(api_weather)
    .then(resolve =>{
      return(resolve.json())
      })
    .then(data =>{
      const newWeather = getData(data);
      this.setState({
        city:data.name,
        data:newWeather,
      })
      // console.log(data);
      });

    
  }
  render(){
    const { city, data } = this.state;
  return (
    <div className="weatherLocationCont">
      <Location city={city} />
      { data ? <WeatherData data={data}/> : "LOADING..."}      
    </div>
  );
  }
};
export default WeatherLocation;
