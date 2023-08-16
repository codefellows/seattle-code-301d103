import React from 'react';
import BankCustomer from './BankCustomer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          <BankCustomer credit={this.credit} name="Jacob"/>
          <BankCustomer credit={this.credit} name="Kristen" />
          <BankCustomer credit={this.credit} name="JB" />
        </div>

        <OverdraftModal warning={this.state.warning} toggleWarning={this.toggleWarning}/>
      </section>
    );
  }
}

class OverdraftModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.warning} onHide={this.props.toggleWarning}>
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Not enough money in the bank :(</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleWarning}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Bank;
