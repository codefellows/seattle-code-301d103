import React from 'react';
import blackHeart from './images/heart-icon.png';
import emptyHeart from './images/heart-line-icon.png';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      favoriteCounter: 0, // added state to track favorite count
    };
  }

  handleClick = () => {
    this.props.openModal(this.props.item); // maybe move to a seperate button click.
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
      favoriteCounter: prevState.isFavorite ? prevState.favoriteCounter - 1 : prevState.favoriteCounter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img className='img-fluid' src={this.props.image_url} alt={this.props.keyword} title={this.props.title}></img>
        <p>{this.props.description}</p>
        <Button variant="light" onClick={this.handleClick}>
          <img id="small" className='img-fluid' src={this.state.isFavorite ? blackHeart : emptyHeart} alt={this.state.isFavorite ? "Black Heart" : "Empty Heart"} />
          {this.state.favoriteCounter} Favorites
        </Button>
      </div>
    );
  }
}
export default HornedBeast;



// task 1: Create state inside of the HornedBeast component that keeps track
//of the number of times each beast has been favorited.

//task 2: Put a heart in each HornedBeast component
//with the number of “Favorites” next to it.


// If isFavorite is true:
// blackHeart(icon) <favoriteCount> Favorites


//If isFavorite is false:
// emptyHeart(icon) <favoriteCount> Favorites
