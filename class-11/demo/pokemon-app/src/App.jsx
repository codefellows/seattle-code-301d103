import React from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: null
    }
  }

  fetchAllPokemon = () => {
    axios.get('http://localhost:3001/pokemon')
      .then(response => {
        this.setState({ pokemonData: response.data });
      });
  }

  // this is a lifecycle method, any code put here will occur automatically when the component "mounts" the DOM.
  componentDidMount() {
    this.fetchAllPokemon();
  }

  render(){
    return (
      <>
        <header>
          <h1>Pokemon App</h1>
        </header>
        <main>
          {this.state.pokemonData
            ? this.state.pokemonData.map(pokemon => <PokemonCard name={pokemon.name} type={pokemon.pokeType} />)
            : null
          }
        </main>
      </>
    )
  }
}

export default App
