import React from 'react';

function ImpactSummary({ completeActions, onClear, totalCo2Saved }) {
  return (
    <div className="impactsummary">
      <h1>Your Impact</h1>
      <button onClick={onClear}>Clear All</button>
      <ul>
        {completeActions.map((action, index) => (
          <li key={index}>
            {action.name} - {action.co2Reduction} kg CO₂
          </li>
        ))}
      </ul>
      <p>Total CO₂ Saved: {totalCo2Saved.toFixed(2)}</p>
    </div>
  );
}

export default ImpactSummary;
