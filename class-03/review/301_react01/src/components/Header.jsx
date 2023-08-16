// dependency injection(?)
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <header>
        <h1>Horned Beasts</h1>
      </header>
    )
  }
}

export default Header;