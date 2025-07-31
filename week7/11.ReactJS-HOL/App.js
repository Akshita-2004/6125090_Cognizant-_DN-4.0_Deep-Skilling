import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello = () => {
    alert("Hello! This is a static greeting after incrementing.");
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome = (message) => {
    alert(message);
  }

  handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event object:", event);
  }

  render() {
    return (
      <div className="container">
        <h1>React Event Handling Examples</h1>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={() => { this.increment(); this.sayHello(); }}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to Event Handling!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleClick}>Synthetic Event (OnPress)</button>

        <br /><br />
        
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
