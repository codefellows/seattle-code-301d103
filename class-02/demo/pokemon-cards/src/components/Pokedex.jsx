import React from 'react';
import PokemonCard from './PokemonCard';
import pokemonCardValues from '../assets/data.json';

class Pokedex extends React.Component {

  render() {

    console.log(pokemonCardValues);

    return (
      <section>
        {pokemonCardValues.map((pokemon, idx) => <PokemonCard key={idx} name={pokemon.name} image_url={pokemon.image_url} type={pokemon.type}/>)};
        {/* <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard /> */}
      </section>
    );
  }
}

export default Pokedex;
