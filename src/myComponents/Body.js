import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './styles.css';
import {Header} from "./Header"
import { Footer } from "./Footer";
import {useNavigate} from "react-router-dom";


export const Body = () => {
  const navigate = useNavigate();

    // const[isSignedIn, setSignedIn] = useState(false)
  return (
    <>
       <div className="jumbotron text-white jumbotron-image shadow" >
          <div className="container imagetext">
          <h1 className="mb-4">
              HOSTELITES
      </h1>
      <h4 className="mb-0"> Looking to avoid the hassle of multiple visits</h4> 
      <h4 className="mb-4">just to get yourself a hostel room? We've got you covered.  </h4>
      <Button className="btn btn-dark" onClick={()=> {navigate("/signup");}}>SIGN UP</Button>
      <Button className="btn  mx-3 btn-dark" onClick={()=> {navigate("signin")}}>SIGN IN</Button>

          </div>
     </div>
    </>
  );
};
// onClick={()=> setSignedIn(true)}