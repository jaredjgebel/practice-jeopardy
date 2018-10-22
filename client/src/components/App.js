import React, { Component } from "react";
import "./App.css";
import { getRandomClues } from "../data/fetch-data";

class App extends Component {
  componentDidMount() {
    // getRandomClues();
  }

  render() {
    return (
      <div className="app">
        <p>Hey</p>
      </div>
    );
  }
}

export default App;
