import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../components/forecastItm'
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature:10,
    humidity:10,
    weatherState:"nomal",
    wind:"normal"
}

class ForcastExtend extends Component {
    
    renderForecastItemDay(){
        return(
            days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
        );
    }
    render() {
        const { city } = this.props
        return (
            <div>
                <h2 className="forecast-title">
                    Pronóstico extendido para { city }
                </h2>
                {this.renderForecastItemDay()}
               
            </div>
        );
    }
}

ForcastExtend.protoType = {
    city: PropTypes.string.isRequired,
}
export default ForcastExtend;