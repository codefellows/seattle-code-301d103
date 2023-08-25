import React from 'react';

class CityForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
    }
  }

  handleInput = (e) => {
    this.setState({ inputValue:e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLocationRequest(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInput}/>
        <button type="submit">Search!</button>
      </form>
    )
  }
}

export default CityForm;
