import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Signup.css";
import { Button, Form, Col, Row } from "react-bootstrap";
import {slide as Menu}  from "react-burger-menu";

var email,
  password,
  confirm_password = "";

/* unction checkInput() {
  console.log(email);
  console.log(password);
}

function passCheck(password, confirm_password){
  if(password == confirm_password){
  console.log(confirm_password);
  } else{
    console.log("passwords don't match");
    
  }
} */




function Signup({regfunction,/*  regEmail, regPass, */ getRegEmail, getRegPass}) {
  return (
    <div>
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
      <div class="wrapper">
      <h1 class ="MUJ">Manipal University Jaipur</h1>
        <div className="form-wrapper">
          <h1>Sign up</h1>
          <Form /* onSubmit={this.handleSubmit} */>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
              <div class="center">
                <Form.Label>Email/Username</Form.Label>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    getRegEmail(e);
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
              <div class="center">
                <Form.Label>Please enter your chosen password</Form.Label>
                </div>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    getRegPass(e);
                  }}
                />
              </Form.Group>
            </Form.Row>

            {/* <Form.Row>
              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <div class="center">
                <Form.Label>Please confirm your password</Form.Label>
                </div>
                <Form.Control
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) => {
                    confirm_password = e.target.value;
                  }}
                />
              </Form.Group>
            </Form.Row> */}

            <div className="createAccount">
              <Button
                type="button"
                variant="success"
                onClick={() => {
                  regfunction();                
                }}
              >
                Sign up
              </Button>
            </div>
            <p>
              Already have an Account?
              <Link to="/Login">Click Here</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
