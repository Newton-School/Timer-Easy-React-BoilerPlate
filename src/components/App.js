import React, { Component, useState } from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date:  };
    this.timerID = undefined
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  tick() {
  }

  render() {
    return (
      <div>
        <h1>Hello!!!!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Timer