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
  render(){
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}
}

export default App;
