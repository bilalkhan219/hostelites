import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './styles.css';
import {useNavigate} from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand href="/" onClick={()=> {navigate("/");}}>
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
    </>
  );
};
