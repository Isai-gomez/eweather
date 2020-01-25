import React, { Component } from "react";
import LocationList from "./components/LocationList";
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
    console.log("handleSelectionLocation");
    console.log(city)
  }
  render(){
  return (
    <div className="App">
      <LocationList 
      cities={cities}
      onSelectedLocation={this.handleSelectionLocation}/>
    </div>
  );
}
}

export default App;
