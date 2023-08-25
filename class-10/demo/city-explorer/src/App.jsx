import React from 'react';
import axios from 'axios';
import './App.css';
import CityForm from './components/CityForm';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: null,
      weather: null,
      movies: null, // array of movies
      error: null,
    }
  }

  handleLocationRequest = async (locationName) => {
    // make the request and send the response data to state
    let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${locationName}&format=json`);
    this.setState({ location: response.data[0] }, () => {
      this.handleCityInfo();
    });
  }

  handleCityInfo = async () => {
    try {
      let {lat, lon} = this.state.location;
      let cityName = this.state.location.display_name.split(',')[0].toLowerCase();

      let cityResponses = await Promise.all([
        axios.get(`${SERVER_URL}/weather?lat=${lat}&lon=${lon}`),
        axios.get(`${SERVER_URL}/movies?searchQuery=${cityName}`),
      ]);
      console.log(cityResponses);
    } catch (e) {
      console.log(e);
      this.setState({ error: 'something went wrong with handleCityInfo'});
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <header>
          <h1>City Explorer</h1>
        </header>
        <CityForm handleLocationRequest={this.handleLocationRequest}/>
      </>
    )
  }
}

export default App
