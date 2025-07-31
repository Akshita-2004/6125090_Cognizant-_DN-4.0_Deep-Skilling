import React from 'react';
import './App.css';

function App() {
  const heading = <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>🏢 Office Space Rental App</h1>;

  const officeImage = "https://images.unsplash.com/photo-1582855491188-4c1207f2c8d5"; // any office image URL

  const officeSpaces = [
    { name: "Skyline View", rent: 75000, address: "Banjara Hills, Hyderabad" },
    { name: "Downtown Tower", rent: 58000, address: "MG Road, Bangalore" },
    { name: "Sea Breeze Hub", rent: 90000, address: "Marine Drive, Mumbai" },
    { name: "Tech Park", rent: 45000, address: "Hitech City, Hyderabad" }
  ];

  return (
    <div className="container">
      {heading}

      <img src={officeImage} alt="Office" className="banner-img" />

      <div className="office-list">
        {officeSpaces.map((office, index) => {
          const rentColor = office.rent > 60000 ? 'green' : 'red';

          return (
            <div key={index} className="office-card">
              <h2>{office.name}</h2>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={{ color: rentColor }}>₹{office.rent}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
