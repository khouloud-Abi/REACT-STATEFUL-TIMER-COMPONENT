import React, { Component } from "react";
import ReactDom from "react-dom";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MSeconde: 844547201 };
    this.conversion = this.conversion.bind(this);
  }

  /* Autre solution pour la conversion */
  /* Je l'ai pas utilisé */
  conversion() {
    var date = new Date(null);
    date.setMilliseconds(this.state.MSeconde);
    var result = date.toISOString().substr(11, 8);
    return result;
  }

  render() {
    return (
      <div className="App">
        <p>{this.conversion()}</p>
        <div className="Timer-unity">
          <h5>Hour</h5>
          <h5>Minute</h5>
          <h5>Second</h5>
        </div>
      </div>
    );
  }
}

export default Timer;
