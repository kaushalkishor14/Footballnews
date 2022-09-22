// import logo from "./logo.svg";
import NavBar from "./Components/NavBar";
import "./App.css";

import React, { Component } from "react";
import Cars from "./Components/Cars";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Cars />
      </div>
    );
  }
}
