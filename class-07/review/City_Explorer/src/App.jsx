import React from 'react';
import './App.css'
import Explorer from './components/Explorer';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import API_KEY from 'src/vite.env'
// import API_KEY from 'src/vite.env';

const API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: '',
      location: null,
      error: null,
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
        this.setState({ error: error });
      });
  }

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
        {/* <BrowserRouter> */}
          <form onSubmit={this.handleForm}>
            <input placeholder="Explore!" type="text" name="city" onChange={this.handleChange} />
            <button type='submit'>
              Search
            </button>
          </form>
          <Explorer location={this.state.location} query={this.state.searchQuery} />
          {/* <Routes> */}
            {/* <Route exact path="/search" element={<Explorer location={this.state.location} query={this.state.searchQuery} />} /> */}
            {/* <Route path="/" element={<p>Please Enter a location to see results.</p>} /> */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}
        {this.state.error
          ? (
            <h2>
              {this.state.error.message}<span onClick={() => this.setState({ error: null })}>X</span>
            </h2>
          )
          : null}
      </>
    )
  }
}

export default App

// Starter Code used from Demo code 8/21/23 //
