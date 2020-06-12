import React from "react";
import { Button, Nav, Col, Row, Navbar, Container, Tabs, Tab, Form } from "react-bootstrap";
import { Circle } from "rc-progress";
import "./Admin.css";


const loadingStyle = {
  width: "100px",
  height: "100px",
};


var convoDates = {
  firstDay: "",
  secondDay: "",
  thirdDay: ""
}

function modifyDates(){
  console.log(convoDates.firstDay);
  
}

function Admin() {
  return (
    <div class="ba">
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="https://jaipur.manipal.edu/">
            Manipal University Jaipur
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Welcome">Welcome</Nav.Link>
            <Nav.Link href="/StudentInfo">Dashboard</Nav.Link>
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
        {/* main logical part of Admin page is here */}
        <br />
        <br />
        <br />

        <hr />


        <div>
          <Tabs defaultActiveKey="modifyDates" id="adminTabs">
            <Tab eventKey="modifyDates" title="Modify Dates">
              <div id="currentDatesBlock">
              These are the current dates for the convocation:
              <ul>
                <li>Convocation Day 1 : {convoDates.firstDay}</li>
                <li>Convocation Day 2 : {convoDates.secondDay}</li>
                <li>Convocation Day 3 : {convoDates.thirdDay}</li>
              </ul>
              </div>
              <div>
                <ul>
                  <li>
                  <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>New Date for Convocation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          convoDates.firstDay = e.target.value;
                        }}
                      />
                    </Form.Group>
                    </Form.Row>
                    </Form>
                  </li>
                </ul>
              </div>

              <Button onClick={() => {modifyDates()}}>Change Dates</Button>
            </Tab>
            <Tab eventKey="view" title="View">
              <Button>Click here to view all student records</Button>
            </Tab>
            
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Admin;
