import React from 'react';
import BankCustomer from './BankCustomer';
import OverdraftModal from './OverdraftModal';

class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      totalMoney: 1000,
      warning: false, // tells our UI when a warning is displayed.
    };
  }

  toggleWarning = () => {
    this.setState({ warning: !this.state.warning });
  };

  debit = (money) => {
    this.setState({
      totalMoney: this.state.totalMoney + money,
    });
    return money;
  };

  credit = (money) => {
    if (this.state.totalMoney < money) {
      this.toggleWarning();
      return null;
    } else {
      this.setState({
        totalMoney: this.state.totalMoney - money,
      });
      return money;
    }
  };

  render() {
    return (
      <section>
        <h2>Welcome to the Instructor Bank!</h2>
        <p>Current Money Pool: {this.state.totalMoney}</p>
        <div className="customer-list">
          {/* the handleCredit prop is an alias for the credit function, passed down to the child */}
          <BankCustomer credit={this.credit} debit={this.debit} name="Jacob"/>
          <BankCustomer credit={this.credit} debit={this.debit} name="Kristen" />
          <BankCustomer credit={this.credit} debit={this.debit} name="JB" />
        </div>

        <OverdraftModal warning={this.state.warning} toggleWarning={this.toggleWarning}/>
      </section>
    );
  }
}

export default Bank;
