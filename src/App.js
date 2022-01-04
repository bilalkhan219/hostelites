import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./myComponents/Header";
import { Body } from "./myComponents/Body";
import { Footer } from "./myComponents/Footer";
import { Home } from "./myComponents/Home";
import { Signin } from "./myComponents/Signin";
import { Signup } from "./myComponents/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
     <Router>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
     </Router>
  );
}

export default App;
