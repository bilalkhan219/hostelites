import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./myComponents/Home";
import { Signin } from "./myComponents/Signin";
import { Signup } from "./myComponents/Signup";
import { AdminHome } from "./myComponents/admin/AdminHome";
import {UserHome} from "./myComponents/user/UserHome";
import {BookingForm} from "./myComponents/user/BookingForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/userHome" element={<UserHome />} />      </Routes>
    </Router>
   // <BookingForm/>
  );
}

export default App;
