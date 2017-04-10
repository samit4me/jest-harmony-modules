import React, { Component } from 'react';
import classNames from 'classnames';
import { square } from '000';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.squared = this.squared.bind(this);
  }

  squared(x) {
    const test = 'jjjjjjj';
    return square(`etff_${test}`, styles);
  }

  render() {
    const style = this.squared(2);
    const className = classNames(style, styles.stuff);
    return (
      <div className={className}>
        <div className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>square(2) === {this.squared(2)}</p>
      </div>
    );
  }
}

export default App;
