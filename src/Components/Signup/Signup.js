import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Signup.css";
import { Button, Form, Col, Row } from "react-bootstrap";

var email,
  password,
  confirm_password = "";

function checkInput() {
  console.log(email);
  console.log(password);
}

function passCheck(password, confirm_password){
  if(password == confirm_password){
  console.log(confirm_password);
  } else{
    console.log("passwords don't match");
    
  }
}

function Signup() {
  return (
    <div>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
      <div class="wrapper">
        <div className="form-wrapper">
          <h1>Sign up</h1>
          <Form /* onSubmit={this.handleSubmit} */>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    email = e.target.value;
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Please enter your chosen password</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    password = e.target.value;
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Label>Please confirm your password</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    confirm_password = e.target.value;
                  }}
                />
              </Form.Group>
            </Form.Row>

            <div className="createAccount">
              <Button
                type="button"
                variant="success"
                onClick={() => {
                  checkInput();
                  passCheck(password,confirm_password);
                }}
              >
                Sign up
              </Button>
            </div>
            <div>
              Already have an Account?
              <Link to="/Login">Click Here</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
