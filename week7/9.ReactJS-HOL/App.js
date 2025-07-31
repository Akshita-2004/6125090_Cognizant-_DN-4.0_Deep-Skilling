import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

function App() {
  const flag = true; // Set to false to show IndianPlayers component

  return (
    <div className="app-container">
      <h1>🏏 Welcome to CricketApp</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
