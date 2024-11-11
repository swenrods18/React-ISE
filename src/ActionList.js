import React from 'react';

function ActionList({ actions, onComplete }) {
  return (
    <div className="actionList">
      <h1>Eco-friendly Actions</h1>
      {actions.map((action) => (
        <div key={action.id} className="action">
          <span>{action.name}</span>
          <span>{action.co2Reduction} kg CO₂</span>
          <button onClick={() => onComplete(action)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ActionList;

