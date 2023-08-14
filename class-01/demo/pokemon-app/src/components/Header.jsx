// dependency injection
import React from 'react';

class Header extends React.Component {
  // only use when you have values passed in from your parent.
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <header>
        <h1>My Pokemon App</h1>
        <h2>{this.props.subTitle}</h2>
      </header>
    )
  }
}

export default Header;
