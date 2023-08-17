import React from 'react';
import { Modal } from 'react-bootstrap';

class TransactionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'credit',
      amount: 0,
    };
  }


  handleSubmit = (event) => {
    event.preventDefault(); // forms want to do something and reload the page.
    // console.log("ELEMENT THAT WAS SUBMITTED :", event.target);
    // console.log(event.target.type.value);
    // console.log(event.target.amount.value);

    let amount = event.target.amount.value;
    let amountNumber = parseInt(amount);
    let transactionType = event.target.type.value;
    this.props.handleTransaction(amountNumber, transactionType);
  };

  handleChange = (e) => {
    console.log(e.target);
    let parsedInput = parseInt(e.target.value); // if 0 we still have a falsey parsedInput value

    this.setState({
      [e.target.name]: (parsedInput && parsedInput !== 0) ? parsedInput : e.target.value,
    }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <Modal show={this.props.showForm} onHide={this.props.toggleForm}>
        <Modal.Header closeButton>
          <h2>Make a Transaction</h2>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <label>Type of Transaction</label>
          <select name="type" onChange={this.handleChange}>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <label>Transaction Amount</label>
          <input type="number" name="amount" onChange={this.handleChange}/>
          <button type="submit">Submit Me!</button>
        </form>
      </Modal>
    );
  }
}

export default TransactionForm;
