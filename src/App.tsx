import React, { Component } from 'react';
import { GreetingClass, Greeting } from './components/useState';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="flex-row">
          <GreetingClass/>
          <Greeting/>
        </div>
      </div>
    );
  }
}

export default App;
