import React, { Component } from "react";
import LocationList from "./components/LocationList";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
        <AppBar>
          <Toolbar position='sticky'>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
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
