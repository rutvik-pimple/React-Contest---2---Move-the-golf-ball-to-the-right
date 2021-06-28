import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState((state) => ({
      renderBall: true,
    }));
  }

  renderBallOrButton() {
    // console.log(this.state.renderBall)
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }

  // bind ArrowRight keydown event
  keyHandler(e) {
    if (e.key == "ArrowRight") {
      const left1 = this.state.ballPosition.left;
      let temp = "";
      for (let i = 0; i < left1.length - 2; i++) {
        temp += left1[i];
      }
      const val = 5 + Number(temp) + "px";
      this.setState({ ballPosition: { left: val } });
      this.renderBallOrButton();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyHandler);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
