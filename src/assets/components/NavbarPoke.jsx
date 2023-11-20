// NavbarPoke.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarPoke = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">PokeApp</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/pokemons" activeClassName="active">
          Pokemones
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarPoke;
