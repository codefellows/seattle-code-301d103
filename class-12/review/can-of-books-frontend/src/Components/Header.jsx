import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem style={{color:'white', marginRight:'10px'}}><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem style={{color:'white', marginRight:'10px'}}><Link to="/About" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
