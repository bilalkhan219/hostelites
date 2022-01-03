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
