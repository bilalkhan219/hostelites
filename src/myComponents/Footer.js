import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  let footerstyle={
    position: "absolute",
    top: "95vh",
    width: "100%"
  }
  return (
    <div className="card text-center bg-dark text-white" style={footerstyle}>
      <div className="card-body">
        <p className="my-0">contact number: 0332-8927300</p>
        <p className="my-0">Address: PUCIT new campus, West canal bank road</p>
        <p className="my-0">&copy; copyright Hostelites</p>
      </div>
    </div>
  );
};
