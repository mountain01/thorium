import React, { Component } from "react";

class CardFrame extends Component {
  render() {
    const { simulator, station, children, cardName } = this.props;
    const alertLevel = simulator.alertlevel || 5;
    return (
      <div className="frame-holder">
        <div className="frame-text">
          <h1 className="simulator-name">{simulator.name}</h1>
          <h1 className="station-name">{station.name}</h1>
          <h1 className="card-name">{cardName}</h1>
        </div>
        <div className="alert-condition">{alertLevel}</div>
        <div className="inner-frame" />
        <div className="navigator" />
      </div>
    );
  }
}
export default CardFrame;
