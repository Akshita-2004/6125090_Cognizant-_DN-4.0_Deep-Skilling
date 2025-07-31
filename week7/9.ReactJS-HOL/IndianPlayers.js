import React from 'react';
import './IndianPlayers.css';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Pant', 'Hardik'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Saha', 'Unadkat'];
  const merged = [...T20players, ...RanjiTrophy];

  const oddPlayers = merged.filter((_, index) => index % 2 !== 0);
  const evenPlayers = merged.filter((_, index) => index % 2 === 0);

  return (
    <div className="section">
      <h2>Merged Players</h2>
      <div className="tag-list">
        {merged.map((name, i) => <span key={i} className="tag">{name}</span>)}
      </div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
