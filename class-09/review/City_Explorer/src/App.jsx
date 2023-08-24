import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Explorer from './components/Explorer';
import axios from 'axios';
import Weather from './components/Weather';

// import API_KEY from 'src/vite.env'
// import API_KEY from 'src/vite.env';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
let SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: '',
      location: null,
      error: null,
      forecastData: null,
    }
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  }

  handleForm = (e) => {
    console.log('Form Submitted');
    e.preventDefault();
    console.log(API_KEY);
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ location: response.data[0] });
        const { lat, lon } = response.data[0];
        axios.get(`${SERVER_URL}/weather?lat=${lat}&lon=${lon}`)
        .then(response => {
          this.setState({forecastData: response.data});
        })
        .catch(error => {
          console.error('WE HAVE A PROBLEM CHIEF! NO FORECAST DATA!', error)
        });
      }).catch(error => {
        console.log('UGH OOOOH:', error);
        this.setState({ error: error });
      });
  }

  // const handleCitySearch = async () => {
  //   try {
  //     const response = await axios.get(`/weather?lat=${lat}&lon=${lon}`);
  //     const forecastData = response.data;
  //   } catch (error) {
  //     console.error("Problem getting forecast data:", error);
  //   }
  // }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    console.log('CITY EXPLORER', this.state);
    return (
      <>
        <header>
          <h1>Welcome to City Explorer!</h1>
        </header>
          <form onSubmit={this.handleForm}>
            <input placeholder="Explore!" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Search
            </button>
          </form>
          <Explorer location={this.state.location} query={this.state.searchQuery} />
        {this.state.error
          ? (
            <h2>
              {this.state.error.message}<span onClick={() => this.setState({ error: null })}>X</span>
            </h2>
          )
          : null}
          {this.state.forecastData ? (
            < Weather forecastData={this.state.forecastData} />
          ) : null}
      </>
    )
  }
}

export default App

// Starter Code used from Demo code 8/21/23 //
