/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import ActionList from "./ActionList";
import ImpactSummary from './ImpactSummary';
import Action from './Action';


const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

function App() {
  const [completeActions, setCompleteActions] = useState([]);

  const totalCo2Saved = completeActions.reduce((total, action) => total + action.co2Reduction, 0);

  const handleComplete = (action) => {
    setCompleteActions([...completeActions, action]);
  };

  const handleClear = () => {
    setCompleteActions([]);
  };

  return (
    <div className='App'>
      <ActionList actions={ecoActions} onComplete={handleComplete} />
      <ImpactSummary completeActions={completeActions} totalCo2Saved={totalCo2Saved} onClear={handleClear} />
    </div>
  );
}

export default App;
