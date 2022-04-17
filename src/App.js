import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./myComponents/Home";
import { Signin } from "./myComponents/Signin";
import { Signup } from "./myComponents/Signup";
import { AdminHome } from "./myComponents/admin/AdminHome";
import {UserHome} from "./myComponents/user/UserHome";
import {Book} from "./myComponents/user/Book";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/userHome" element={<UserHome />} />    
        <Route path="/bookform" element={<Book />} />    
        </Routes>
    </Router>
   // <BookingForm/>
  );
}

export default App;
