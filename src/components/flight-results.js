import React, { Component } from 'react';
import dataflight from './../data/result_data.json';
import '../css/flight-results.css';
import Moment from 'react-moment';
import moment from 'moment';
import momentDurationFormatSetup  from 'moment-duration-format';
momentDurationFormatSetup(moment);

class FlightResult extends Component {
  constructor() {
    super();
    this.state = {dataflight:dataflight};
  }
  render () {
    console.log(this.state.dataflight);
    return (
      <div>
      <div className="container-flex">
        <div className="col-left text-right">
          <div className="price p-3">
            <span className="currency">{this.state.dataflight.currency}</span>
            <span className="cost"> {this.state.dataflight.price}</span>
          </div>
        </div>
        <div className="col-right bg-white">
          <div className="p-3">
            <div className="container-flex">
              <div className="col-3"><img src="./images/TR.gif" alt="Scoot"/></div>
              <div className="col-3"><img src="./images/GK.gif" alt="Jet star"/></div>
              <div className="col-3"><img src="./images/D7.gif" alt="Airasia"/></div>
              <div className="col-3 text-right"><button className="btn-blue">View Flight Times and Continue</button></div>
            </div>
            <div className="container-flex">
              <ul className="ulnonlist flight-list">
                <p className="m-0 w-100 text-right text-grey"><small>Travel Time</small></p>
                {
                  this.state.dataflight.flights.map(function(flight, i){
                    let arrivalTime = moment(flight.arrival.dateTime)
                    let departureTime = moment(flight.departure.dateTime)
                    let duration = moment.duration((arrivalTime.diff(departureTime)/1000),"seconds").format("h[h] m[m]");
                    return <li key={i}>
                      <dl className="m-0">
                        <dt>
                          <Moment format="D MMM" withTitle>{flight.departure.dateTime}</Moment>
                        </dt>
                        <dd className="city">{flight.departure.city}({flight.departure.airportCode})
                        to {flight.arrival.city}({flight.arrival.airportCode})</dd>
                        <dd>Depart <Moment format="h:mm a" withTitle>{flight.departure.dateTime}</Moment></dd>
                        <dd className="flight-time">
                          <small>
                            <i className="far fa-clock text-orange"></i></small> {duration}
                        </dd>
                      </dl>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="container-flex">
              <div className="baggage border-grey p-3 w-100 mt-3 text-left">
                <strong>Your Baggage information</strong>
                <hr className="m-0 border-grey"/>
                <ul className="ulnonlist container-flex">
                  {
                    this.state.dataflight.flights.map(function(flight, i){
                      return <li key={i} className="col-4 baggage-list">
                        <div className="item">
                          <p className="text-blue"><strong><i className="fas fa-plane-departure"></i> {flight.departure.city} to {flight.arrival.city}</strong></p>
                          <p className="m-0"><i className="fas fa-suitcase" title="Carry on Baggage"></i> x {(flight.baggage.carryOn === null)?<span>0</span>: flight.baggage.carryOn.piece} <small>{(flight.baggage.carryOn === null)?<span></span> : <span>({(flight.baggage.carryOn.weight.kilograms === null)?<span>N/A</span>: flight.baggage.carryOn.weight.kilograms} kgs)</span>}</small></p>
                          <p className="m-0"><i className="fas fa-luggage-cart" title="Checked in Baggage"></i> x {(flight.baggage.checkedBag === null)? <span>0</span>: <span>{(flight.baggage.checkedBag.piece === null)? <span>N/A</span> : <span>{flight.baggage.checkedBag.piece}</span> }</span>} <small>{(flight.baggage.checkedBag === null)?<span></span> : <span>({(flight.baggage.checkedBag.weight.kilograms === null)?<span>N/A</span>: flight.baggage.checkedBag.weight.kilograms} kgs)</span>}</small></p>
                          <p><small>
                            {(flight.baggage.carryOn === null)?<span></span>: <span>{(flight.baggage.carryOn.piece === null)? <span>N/A</span>: flight.baggage.carryOn.piece} carry on bag(s) {(flight.baggage.carryOn === null)?<span></span> : <span><br/>({(flight.baggage.carryOn.weight.kilograms === null)?<span>N/A</span>: flight.baggage.carryOn.weight.kilograms} kgs)</span>}</span>}
                            {(flight.baggage.checkedBag === null)?<span></span>: <span>{(flight.baggage.checkedBag.piece === null)? <span>N/A</span>: flight.baggage.checkedBag.piece} checked bag(s){(flight.baggage.checkedBag === null)?<span></span> : <span><br/>({(flight.baggage.checkedBag.weight.kilograms === null)?<span>N/A</span>: flight.baggage.checkedBag.weight.kilograms} kgs)</span>}</span>}
</small></p>
                        </div>
                      </li>
                    })}
                </ul>
                <p>
                  <small className="mr-3"><i className="fas fa-suitcase" title="Carry on Baggage"></i> = Carry on Baggage</small>
                  <small className="mr-3"><i className="fas fa-luggage-cart" title="Carry on Baggage"></i> = Carry on Baggage</small>
                  <small className="mr-3">N/A = Contact us for more information </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
};

export default FlightResult;
