import React from 'react';
import TransactionForm from './TransactionForm';
import OverdraftModal from './OverdraftModal';

class BankCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 0,
      showForm: false,
      showWarning: false,
    };
  }

  addMoney = (money) => {
    this.setState({
      money: this.state.money + money,
    });
  };

  removeMoney = (money) => {
    if (this.state.money < money) {
      this.toggleWarning();
    } else {
      this.setState({ money: this.state.money - money});
    }
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  toggleWarning = () => {
    this.setState({ showWarning: !this.state.showWarning });
  };

  // needs to tell the bank how much to credit, and add that money to our state.
  handleTransaction = (amount, type) => {
    console.log(amount, type);
    if (type === 'credit') {
      let value = this.props.credit(amount);
      if (value) {
        this.addMoney(value);
      }
    } else {
      let value = this.props.debit(amount);
      this.removeMoney(value);
    }
  };

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Current balance: {this.state.money}</p>
        <button onClick={this.toggleForm}>Make a Transaction!</button>
        <TransactionForm showForm={this.state.showForm} toggleForm={this.toggleForm} handleTransaction={this.handleTransaction}/>
        <OverdraftModal warning={this.state.showWarning} toggleWarning={this.toggleWarning} />
      </div>
    );
  }
}

export default BankCustomer;
