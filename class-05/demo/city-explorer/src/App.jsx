import React from 'react';
import './App.css'
import Explorer from './components/Explorer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      searchQuery: ''
    }
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  }

  handleForm = (e) => {
    e.preventDefault();
    this.setState({searchQuery: e.target.city.value })
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    // no JS statement can go here
    // only JS expression are allowed in the return.
    console.log('EXPLORER CITY', this.state.searchQuery);
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
            <button>
              <Link to="/search">Search!</Link>
            </button>
          </form>
          <Routes>
            <Route exact path="/search" element={<Explorer query={this.state.searchQuery} />} />
            <Route path="/" element={<p>Please Enter a location to see results.</p>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
