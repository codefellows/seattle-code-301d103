import React from 'react';

class BankCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 0,
    };
  }

  addMoney = (money) => {
    this.setState({
      money: this.state.money + money,
    });
  };

  // needs to tell the bank how much to credit, and add that money to our state.
  handleClick = () => {
    let amount = 200;
    let value = this.props.credit(amount);
    if (value) {
      this.addMoney(value);
    }
  };

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Current balance: {this.state.money}</p>
        <button onClick={this.handleClick}>Give Me Money!!</button>
      </div>
    );
  }
}

export default BankCustomer;
