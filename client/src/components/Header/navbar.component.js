import React from 'react';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'



export default class Header extends React.Component {
     render(){
        return(
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Loan Ranger</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About Us</Nav.Link>
      <Nav.Link href="#home">Create Account</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <NavDropdown title="Explore" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Reviews</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Partners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Certifications</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Developer Tools</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

        );
    }
}





