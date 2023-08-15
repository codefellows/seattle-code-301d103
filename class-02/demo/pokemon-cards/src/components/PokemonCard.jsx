import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PokemonCard extends React.Component {
  constructor() {
    super(); // activate React.Component!!
    // state is added here
    this.state = {
      isFavorite: false,
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  render() {

    // let isFavorite  = false; // react can't rerender values set like this => add to state in a constructor.

    return (
      <Card>
        <Card.Img className="card-image" variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{`Am I a favorite? ${this.state.isFavorite}`}</Card.Text>
          <Card.Text>{this.props.type}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Favorite Me!</Button>
        </Card.Body>
        {/* <button onClick={() => isFavorite = !isFavorite}>Favorite Me!</button> */}
      </Card>
    );
  }
}

export default PokemonCard;
