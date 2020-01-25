import React, { Component} from "react";
import { PropTypes } from 'prop-types';
import CircularProgres from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'  
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import getData from '../../services/transforWeather';


class WeatherLocation extends Component {
  constructor(props){
    super(props);
    const { city } = props;
    this.state = {
      city,
      data:null
    }
  }
  componentDidMount() {
    this.handleUpdateClick();
  }
  
  
  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
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
      { data ? <WeatherData data={data}/> : <CircularProgres size={60}/>}      
    </div>
  );
  }
};
WeatherLocation.protoTypes= {
  cyti:PropTypes.string.isRequired,
}
export default WeatherLocation;
