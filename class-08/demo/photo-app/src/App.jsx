import React from 'react';
import axios from 'axios';
import './App.css'

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
const SERVER_URL = import.meta.env.VITE_EXPRESS_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: null,
      photos: null,
      error: null,
      searchQuery: null,
    }
  }

  setSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let locationResponse = await axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
      console.log(locationResponse);
      let photoResponse = await axios.get(`${SERVER_URL}/photo?searchQuery=${this.state.searchQuery}`);
      this.setState({
        location: locationResponse.data[0],
        photos: photoResponse.data.results,
      });
    } catch (e) {
      console.log('ERROR FROM FORM SUBMISSION:', e);
      this.setState({ error: e });
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <header>
          <h1>Search Photos by Location!</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.setSearchQuery} />
          <button type="submit">Search!</button>
        </form>
        {this.state.photos && this.state.photos.map((photo, idx) => (
          <img key={idx} src={photo.urls.small}/>
        ))}
      </>
    )
  }
}

export default App
