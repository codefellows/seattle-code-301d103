import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img class="dogos" src={this.props.image} alt={this.props.description} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;