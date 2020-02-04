import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../components/forecastItm'
import './styles.css';

class ForcastExtend extends Component {
    render() {
        const { city } = this.props
        return (
            <div>
                <h2 className="forecast-title">
                    Pronóstico extendido para { city }
                </h2>
                <ForecastItem></ForecastItem>
            </div>
        );
    }
}

ForcastExtend.protoType = {
    city: PropTypes.string.isRequired,
}
export default ForcastExtend;