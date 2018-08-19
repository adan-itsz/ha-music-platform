import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './componentes/nav.js';
import RouterPrincipal from './RouterPrincipal.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <RouterPrincipal/>
      </div>
    );
  }
}

export default App;
