import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// import Degree from "./Degree";
// import People from "./People";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <div>{/* The Navbar is hidden behind the background for some reason please fix */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Manipal University Jaipur</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/studentInfo">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="/Welcome">Welcome</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <div class="welcome">
        <div className="welcome2">
          <h1>Welcome to convocation portal !!!!</h1>

          <div class="bb1">
            <button /* onClick={this.join} */>
              <h3>Join the convocation event</h3>
            </button>
          </div>

          <div class="bb2">
            <button /* onClick={this.getDegree} */>
              <h3>Get Degree by post</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
