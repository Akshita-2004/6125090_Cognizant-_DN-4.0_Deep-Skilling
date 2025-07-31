import React, { Component } from 'react';
import './CurrencyConvertor.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleInput = (event) => {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit = () => {
    const euroRate = 0.011; // 1 INR = 0.011 EUR approx
    const euros = (this.state.rupees * euroRate).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div className="converter">
        <h2>Currency Converter</h2>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.rupees}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>{this.state.euros && `Equivalent in Euros: €${this.state.euros}`}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
