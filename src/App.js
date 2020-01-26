import React, { Component } from "react";
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from 'react-flexbox-grid';
import "./App.css";

const cities = [
  'Comalcalco,MX',
  'Veracruz,MX',
  'Washington,US',
  'Bogota,COL',
  'Madrid,ES',
  'Lima,PE',
];


class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
    
  }
  render(){
  return (
    <Grid>
      <Row>
        Titulo
      </Row>
      <Row>
        <Col xs={12} md={6}>
      <LocationList 
      cities={cities}
      onSelectedLocation={this.handleSelectionLocation}/>
      </Col>
      <Col xs={12} md={6}>
      <div className="details"></div>
      </Col>
      </Row>
    </Grid>
  );
}
}

export default App;
