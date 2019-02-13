import React, { Component } from 'react';
import { Greeting } from './components/stateManagementHooks';
import { GreetingClass } from './components/stateManagementClass';
import { Title } from './components/updateManagementHooks';
import { TitleClass } from './components/updateManagementClass';
import { CustomHook } from './components/useCustomHooks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <h2 className="background-setter">State management with Hooks</h2>
        <div className="flex-row background-setter">
          <GreetingClass/>
          <Greeting/>
        </div>
        <h2 className="background-setter">Update management with Hooks</h2>
        <div className="flex-row background-setter">
          <TitleClass/>
          <Title/>
        </div>
        <h2 className="background-setter">Crafting our own Hooks</h2>
        <div className="flex-row background-setter">
          <CustomHook/>
        </div>
      </div>
    );
  }
}

export default App;
