// import logo from "./logo.svg";
import NavBar from "./Components/NavBar";
import "./App.css";

import React, { Component } from "react";
import Cars from "./Components/Cars";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Cars pageSize={20} country="in" category="general" />
        </Router>
      </div>
    );
  }
}
