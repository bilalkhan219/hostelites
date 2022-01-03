import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Alert} from "react-bootstrap";
import {Header} from "./myComponents/Header"
import { Body } from "./myComponents/Body";
function App() {
  return (
   <>
   {/* <Header/>
   <Footer/> */}
   <Body/>
   </>
  );
}

export default App;
