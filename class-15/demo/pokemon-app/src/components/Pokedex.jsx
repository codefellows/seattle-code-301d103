import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'

class Pokedex extends React.Component {
  constructor(){
    super();
    this.state = {
      token: null,
    }
  }


  async componentDidMount() {
    let res = await this.props.auth0.getIdTokenClaims();
    const token = res.__raw;
    console.log('OUR WEB TOKEN!', token);
    this.setState({ token });

    // make a request with the token....
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      method: 'GET',
      baseURL: 'http://localhost:3001',
      url: '/pokemon'
    }

    const pokemonResponse = await axios(config);

    console.log(pokemonResponse);
  }

  render() {
    console.log('POKEDEX PROPS', this.props);
    console.log('AUTH0 User:', this.props.auth0.user);
    return (
      <>
        <h2>My Pokedex</h2>
      </>
    )
  }
}

const AuthPokedex = withAuth0(Pokedex); // extra step to make our Pokedex aware of auth0 stuff.

export default AuthPokedex;
