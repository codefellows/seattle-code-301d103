import React from 'react';
import { Card } from 'react-bootstrap';

class PokemonCard extends React.Component {
  render() {
    return(
      <Card>
        <Card.Header>
          <Card.Title>{this.props.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{this.props.type}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default PokemonCard;
