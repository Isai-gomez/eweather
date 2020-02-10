import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from '../services/transformForecast';
// import ForecastItem from '../components/forecastItm'
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ];

// const data = {
//     temperature:10,
//     humidity:10,
//     weatherState:"nomal",
//     wind:"normal"
// }
const apiKey = "4a3b955b30e14049a845fc8846fa2ff0";
const url = "http://api.openweathermap.org/data/2.5/forecast";
class ForcastExtend extends Component {
    constructor(){
        super();
        this.state = { 
            forecastData: null,
        }
    }
    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${apiKey}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data)
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)   
                this.setState({forecastData})
            }
        )
    }
    renderForecastItemDay(){
        return( "Render Item"
            // days.map(day => <Foṛ̣ecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
        );
    }

    renderProgress = () => {
        return(
            <h2>
                Cargando pronótico extendido
            </h2>
        )
    }
    render() {
        const { city } = this.props
        const { forecastData } = this.state; 
        return (
            <div>
                <h2 className="forecast-title">
                    Pronóstico extendido para { city }
                </h2>
                {
                forecastData ?
                this.renderForecastItemDay():
                this.renderProgress()
                }               
            </div>
        );
    }
}

ForcastExtend.protoType = {
    city: PropTypes.string.isRequired,
}
export default ForcastExtend;