import React from 'react';

function GuestPage() {
  return (
    <div className="section">
      <h2>Welcome Guest!</h2>
      <p>You can browse available flights but must log in to book tickets.</p>
      <ul>
        <li>✈️ Hyderabad to Delhi - ₹5500</li>
        <li>✈️ Mumbai to Bangalore - ₹4500</li>
        <li>✈️ Chennai to Kolkata - ₹4900</li>
      </ul>
    </div>
  );
}

export default GuestPage;
