//this is the UserHome page 
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import "./styles.css";



function UserHome() {
  return (
    <div>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
      <Container>
        <Row>
          <Col>
            <div className="border text-center">
              <h1>User Home Page!!</h1>
            </div>
          </Col>
        </Row>        
      </Container>
      <div>
      <ul>
            <li><Link to="login">Login</Link></li>
            <li><Link to="Signup">Signup</Link></li>
            <li><Link to="UserHome">UserHome</Link></li>
            <li><Link to="StudentInfo">StudentInfo</Link></li>
            <li><Link to="Welcome">Welcome</Link></li>
          </ul>
      </div>
    </div>
  );
}

export default UserHome;


