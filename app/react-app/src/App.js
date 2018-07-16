import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container">
          <div class="header">Header</div>
          <div class="main">Main</div>
          <div class="right">Right</div>
          <div class="footer">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
