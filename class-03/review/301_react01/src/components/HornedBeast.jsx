import React from 'react';
import Card from 'react-bootstrap/Card';
import heart from '../assets/heart.png'; // importing our images helps React + Vite.

//lines 6-25 written with help from ChatGPT 3.5

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      // clicks: 0,
    };
  }

  incrementFavorites = () => {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
    }));
  };

  // incrementClicks = () => {
  //   this.setState((prevState) => ({
  //     clicks: prevState.clicks + 1,
  //   }));
  // };

  render() {
    return (
      <Card style ={{width: '18rem'}}>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
        <button onClick={this.incrementFavorites}>
          <img src={heart} alt="Heart" className="heart-icon" /> Favorites: {this.state.favorites}
        </button>
      </Card>
    );
  }
}

export default HornedBeast;
