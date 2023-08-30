import React from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';


const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      showModal: false,
    }
  }

  // we want some code to run when the page loads
  componentDidMount() {
    axios.get(`${SERVER_URL}/pokemon`)
      .then(response => {
        this.setState({ pokemon: response.data });
      });
  }

  handleUpdate = async (pokemon) => {
    let response = await axios.put(`${SERVER_URL}/pokemon/${pokemon._id}`, pokemon);
    let updatedPokemon = response.data; // New Pokemon
    this.state.pokemon // array with pokemon inside
    let replacementIndex = null;

    // get the index of the previous pokemon
    this.state.pokemon.forEach((pokemon, idx) => {
      if (pokemon._id === updatedPokemon._id) {
        replacementIndex = idx;
      }
    });

    this.setState({
      pokemon: this.state.pokemon.map((pokemon, idx) => {
        if (idx === replacementIndex) {
          return updatedPokemon;
        } else {
          return pokemon;
        }
      }),
    });
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
    this.setState({ pokemon: [...this.state.pokemon, response.data] });
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

  handleModal = (e, pokemon) => {
    e.preventDefault();
    let {
      name,
      type,
      defense,
      attack
    } = e.target;

    this.handleUpdate({
      _id: pokemon._id,
      name: name.value || pokemon.name,
      type: type.value || pokemon.type,
      defensePoints: defense.value || pokemon.defensePoints,
      attackPoints: attack.value || pokemon.attackPoints
    });

    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    console.log(this.state);
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
              <button onClick={this.toggleModal}>Update</button>
              <Modal show={this.state.showModal} onHide={this.toggleModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Pokemon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={(e) => this.handleModal(e, pokemon)}>
                    <input name="name" />
                    <input name="type" />
                    <input name="defense" />
                    <input name="attack" />
                    <button type="submit">Update!</button>
                  </form>
                </Modal.Body>
              </Modal>
            </>
        ))}
      </>
    )
  }
}

export default App
