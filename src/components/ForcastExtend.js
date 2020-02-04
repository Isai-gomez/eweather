import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../components/forecastItm'
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

class ForcastExtend extends Component {
    constructor(){
        super();
        this.state = { 
            forecastData: null,
        }
    }
    
    renderForecastItemDay(){
        return( "Render Item"
            // days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
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