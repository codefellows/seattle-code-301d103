import React from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

class Explorer extends React.Component {
  constructor() {
    super();
    this.state = {
      location: null,
      searchQuery: null,
      error: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // 1 request to location IQ
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.searchQuery}&format=json`)
      .then(response => {
        this.setState({ location: response.data[0]})
        return axios.get(`http://localhost:3001/weather?city=${this.state.searchQuery}`) // another request to our express server after the 1st request finishes.
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => this.setState({ error }));
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {

    let staticMapUrl = `https://placehold.co/600x400`;

    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
        <p>{this.state.location ? this.state.location.display_name : null}</p>
        <img src={this.state.location ? staticMapUrl : null}/>
      </main>
    )
  }
}

export default Explorer;
