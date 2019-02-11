import React, { Component } from 'react';
import { GreetingClass, Greeting } from './components/useState';
import { TitleClass, Title } from './components/useEffect';
import { CustomHook } from './components/useCustomHooks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="flex-row">
          <GreetingClass/>
          <Greeting/>
        </div>
        <div className="flex-row">
          <TitleClass/>
          <Title/>
        </div>
        <div className="flex-row">
          <CustomHook/>
        </div>
        
      </div>
    );
  }
}

export default App;
