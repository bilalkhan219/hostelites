import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './styles.css';
import {Header} from "./Header"
import { Footer } from "./Footer";

export const Body = () => {
    const[isSignedIn, setSignedIn] = useState(false)
  return (
    <>
    <Header/>
      {!isSignedIn && <div className="jumbotron text-white jumbotron-image shadow" >
          <div className="container imagetext">
          <h1 class="mb-4">
              HOSTEL MANAGEMENT SYSTEM
      </h1>
      <h4 class="mb-4"> A hostel management software kjdsnckjndsajcansdjc  </h4>
      <Button className="btn btn-dark">SIGN UP</Button>
      <Button className="btn  mx-3 btn-dark" onClick={()=> setSignedIn(true)}>SIGN IN</Button>

          </div>
     </div>}
     {isSignedIn && <div>
         dsadasdsadasdas
         </div>}
   <Footer/>
    </>
  );
};
