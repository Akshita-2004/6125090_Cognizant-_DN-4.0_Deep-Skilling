import React from 'react';
import './ListofPlayers.css';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 82 },
    { name: 'Dhoni', score: 99 },
    { name: 'Rahul', score: 65 },
    { name: 'Pant', score: 58 },
    { name: 'Hardik', score: 71 },
    { name: 'Jadeja', score: 77 },
    { name: 'Bumrah', score: 45 },
    { name: 'Shami', score: 66 },
    { name: 'Kuldeep', score: 59 },
    { name: 'Ashwin', score: 75 }
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <div className="section">
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}><span>{p.name}</span><span>{p.score}</span></li>
        ))}
      </ul>
      <h2>Players Scoring Below 70</h2>
      <ul className="highlight">
        {below70.map((p, i) => (
          <li key={i}><span>{p.name}</span><span>{p.score}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
