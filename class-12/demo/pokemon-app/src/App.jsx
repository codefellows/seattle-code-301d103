import React from 'react';
import axios from 'axios';
import './App.css'


const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // name: '',
      // type: '',
      // dp: '',
      // ap: '',
      // abilities: [],
      pokemon: [],
    }
  }

  handleDelete = async (id) => {
    await axios.delete(`${SERVER_URL}/pokemon/${id}`);
    this.setState({ pokemon: this.state.pokemon.filter(pokemon => {
      console.log(pokemon._id);
      return pokemon._id !== id
    })});
  }

  handleCreate = async (pokemon) => {
    let response = await axios.post(`${SERVER_URL}/pokemon`, pokemon); // this is an axios thing,  create a JSON object for us.
    this.setState({ pokemon: [...this.state.pokemon, response.data]});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      name,
      type,
      defense,
      attack
    } = e.target;

    this.handleCreate({
      name: name.value,
      type: type.value,
      defensePoints: defense.value,
      attackPoints: attack.value
    });
  }

  // handleChange = (e) => {

  // }

  render() {
    return (
      <>
        <header>
          <h1>Pokemon App</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input name="name"/>
          <input name="type" />
          <input name="defense" />
          <input name="attack"/>
          <button type="submit">Create Pokemon!</button>
        </form>
        {this.state.pokemon.map(pokemon => (
            <>
              <p>{pokemon.name}</p>
              <button onClick={() => this.handleDelete(pokemon._id)}>Delete</button>
            </>
        ))}
      </>
    )
  }
}

export default App
