import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './componentes/nav.js';
class App extends Component {
  render() {
    return (
      <div className="App">
      <HomepageLayout/>
      </div>
    );
  }
}

export default App;
