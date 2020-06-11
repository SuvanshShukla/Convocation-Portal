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
      <div class="d">
      <div class="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vhnhUq8E-ZA" frameborder="0" align="left" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video-responsive2">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ODoWIN8Ygbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    <strong class="log">
    <a href="/">
        <img src="https://www.lawof.in/wp-content/uploads/2019/08/manipal-university-jaipur-logo-11-237x300.png"/>
    </a>
    </strong>
    <h2>Manipal University Jaipur - 67 years of legacy of Manipal Education‎</h2>
   <strong class="border"><Link to="/studentInfo" exact strict>
                      Dashboard
                    </Link></strong> 
      </div>       
       </div>
  );
}

export default Welcome;
