//this is the UserHome page 
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Carousel, Container, Row, Col } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import "./UserHome.css";
import axios from "axios";


function getAll(){
  axios.get("http://localhost:8080/steal").then(res =>{
    console.log(res.data);
    
  })
}


function UserHome() {
  return (
    <div class="user">
    <Menu>
        
        <a id="manipalWebsite" className="menu-item" href="https://jaipur.manipal.edu/" target="_blank">
          Main Website (MUJ)
        </a>
        <a id="about" className="menu-item" href="https://jaipur.manipal.edu/muj/about-us.html" target="_blank">
          About
        </a>
        <a id="contact" className="menu-item" href="https://jaipur.manipal.edu/muj/contact-us.html" target="_blank">
          Contact
        </a>
        <a id="Login" className="menu-item" href="/Login">
          Login
        </a>
      </Menu>
      <Container>
        <Row>
          <Col>
            <div className="border text-center bold">
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
      <div>
        <Button onClick={() =>{getAll()}}>get(find all)</Button>
      </div>
    </div>
  );
}

export default UserHome;


