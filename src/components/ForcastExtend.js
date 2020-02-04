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
]

class ForcastExtend extends Component {
    
    renderForecastItemDay(){
        return(
            days.map(day => <ForecastItem weekDay={day}></ForecastItem>)
        )
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