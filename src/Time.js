import React, { Component } from "react";
import ReactDom from "react-dom";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MSeconde: 8445407201 };
  }

  conversion() {
    let Hour = Math.floor((this.state.MSeconde / 3600000) % 24);
    let Minute = Math.floor((this.state.MSeconde / 60000) % 60);
    let Second = Math.floor((this.state.MSeconde / 1000) % 60);
    let result = new Array();
    result.push(Hour < 10 ? "0" + Hour + "  :" : Hour + "  :");
    result.push(Minute < 10 ? "0" + Minute + "  :" : Minute + "  :");
    result.push(Second < 10 ? "0" + Second : Second);

    return result;
  }

  render() {
    return (
      <div className="App">
        <h4>Conversion de {this.state.MSeconde} Millisecondes en HH:mm:ss :</h4>
        <div className="Timer">
          <p>{this.conversion()}</p>
          <div className="Timer-unity">
            <h5>Hour</h5>
            <h5>Minute</h5>
            <h5>Second</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Time;
