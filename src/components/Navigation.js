import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = ({ posts }) => (
  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Galeria</Nav.Link>
        <NavDropdown title="Raças" id="basic-nav-dropdown">
          {posts &&
            posts.map(({ name }) => (
              <NavDropdown.Item href="#action/3.1">{name}</NavDropdown.Item>
            ))}
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
