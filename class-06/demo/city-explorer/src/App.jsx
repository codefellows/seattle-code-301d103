import React from 'react';
import './App.css'
import Explorer from './components/Explorer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
// Vites way of loading files from a .env file -> requires "VITE_" to be used at the beginning of your key
const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: '',
      location: null,
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
      }).catch(error => {
        console.log('UGH OOOOH:', error);
      });
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    // no JS statement can go here
    // only JS expression are allowed in the return.
    console.log('CITY EXPLORER', this.state);
    return (
      <>
        <header>
          <h1>Welcome to City Explorer!</h1>
        </header>
        {/* {this.state.searchQuery
          ? <Explorer />
          : <p>Please Enter a location to see results.</p>
        } */}
        <BrowserRouter>
          <form onSubmit={this.handleForm}>
            <input placeholder="Enter City Name" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Search
              {/* <Link to="/search">Search!</Link> */}
            </button>
          </form>
          <Routes>
            <Route exact path="/search" element={<Explorer location={this.state.location} query={this.state.searchQuery} />} />
            <Route path="/" element={<p>Please Enter a location to see results.</p>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
