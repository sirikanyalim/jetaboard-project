import React, { Component } from 'react';
// import logo from './logo.svg';
import FlightResult from "./flight-results";
import '../css/styles.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container-result mx-auto">
            <FlightResult/>
        </div>

      </div>
    );
  }
}

export default App;
