import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './styles.css';

export const Header = () => {
  return (
    <>
      {/* <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
      <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require('./sign.png')}
              width="30"
              height="30"
              className="d-inline-block align-top mx-3"
            />
            Hostelites
          </Navbar.Brand>
        </div>
      </Navbar>
      {/* <div className="jumbotron text-white jumbotron-image shadow" >
          <div className="container imagetext">
          <h1 class="mb-4">
              HOSTEL MANAGEMENT SYSTEM
      </h1>
      <h4 class="mb-4"> A hostel management software kjdsnckjndsajcansdjc  </h4>
      <Button className="btn btn-dark">SIGN UP</Button>
      <Button className="btn  mx-3 btn-dark">SIGN IN</Button>

          </div>
     </div> */}
    </>
  );
};
