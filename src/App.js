import React, { Component } from 'react';
import { square } from '../packages/000';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.squared = this.squared.bind(this);
  }

  squared(x) {
    return square(x);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>square(2) === {this.squared(2)}</p>
      </div>
    );
  }
}

export default App;
