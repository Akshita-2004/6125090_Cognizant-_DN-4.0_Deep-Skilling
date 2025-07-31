import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    let page;
    if (isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div className="app-container">
        <h1>✈️ Ticket Booking App</h1>
        <div className="btn-container">
          {isLoggedIn ? (
            <button onClick={this.handleLogout}>Logout</button>
          ) : (
            <button onClick={this.handleLogin}>Login</button>
          )}
        </div>
        {page}
      </div>
    );
  }
}

export default App;
