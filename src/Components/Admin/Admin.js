import React from "react";
import { Button, Nav, Col, Row, Navbar, Container } from "react-bootstrap";
import {Circle } from "rc-progress";

const loadingStyle ={
    width: "100px",
    height: "100px"
}

function Admin() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Manipal University Jaipur</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Welcome">Welcome</Nav.Link>
          <Nav.Link href="/Admin">Dashboard</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        <Container>
          <Row>
            <div style={loadingStyle} className="Col m-auto">
              Percentage of Students Registered
              <Circle
                percent="10"
                strokeWidth="4"
                strokeColor="red"
                gapDegree="90"
                gapPosition="bottom"
              />
            </div>
            <div style={loadingStyle} className="Col m-auto">
                Percentage of Students Attending
                <Circle
                percent="10"
                strokeWidth="4"
                strokeColor="green"
                gapDegree="90"
                gapPosition="bottom"
              />
            </div>
            <div style={loadingStyle} className="Col m-auto">
                Percentage of Student not yet paid
                <Circle
                percent="10"
                strokeWidth="4"
                strokeColor="blue"
                gapDegree="90"
                gapPosition="bottom"
              />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Admin;


