import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// import Degree from "./Degree";
// import People from "./People";
import "./welcome2.css";


function Welcome() {
  return (
    <div class="welcome">
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://jaipur.manipal.edu/">Manipal University Jaipur</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/studentInfo">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="/Welcome">Welcome</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div class="con">
      <h1>Welcome to convocation portal !!!!</h1>
      </div>
{/* 
      <div class="welcome">
        <div className="welcome2">
          <h1>Welcome to convocation portal !!!!</h1>

          <div class="bb1">
            <button>
              <h3>Join the convocation event</h3>
            </button>
          </div>

          <div class="bb2">
            <button>
              <h3>Get Degree by post</h3>
            </button>
          </div>
        </div>
   
      </div>
  */}                                                      
    </div>
  );
}

export default Welcome;
