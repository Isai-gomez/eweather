import React, { Component } from "react";
import ForcastExtend from "./components/ForcastExtend";
import LocationList from "./components/LocationList";
import { cities } from './constants/cities'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { Grid, Col, Row } from 'react-flexbox-grid';
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = { city: null}
  }
  handleSelectionLocation = city => {
    this.setState({
      city
    })
    
  }
  render(){
    const { city } = this.state;
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
        <Paper elevation={4}>
          <div className="details">
            { !city ?
             null :
            <ForcastExtend city={ city }></ForcastExtend>
            }
            
          </div>
        </Paper>
      </Col>
      </Row>
    </Grid>
  );
}
}

export default App;
