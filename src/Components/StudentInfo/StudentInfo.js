import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  Tab,
  Tabs,
  Nav,
  Navbar,
} from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import "./studentInfo.css";

var firstName,
  lastName,
  regno,
  email,
  studentNo,
  parentNo,
  bloodgrp,
  program,
  dept,
  gradyear,
  gradmonth,
  address,
  city,
  state,
  zip,
  familyCount = "";
var curtain = "";

/* function radio(){
    var noRadio = document.getElementById("formHorizontalRadios2");
    var decision = noRadio.value;
    var yesRadio = document.getElementById("formHorizontalRadios1");
    var decision1 = yesRadio.value;
    if(decision || decision1 == "1"){
      console.log(decision);
    }
    else {
      console.log("not selected!!");
      
    }
    
  } */

/* function show(x) {
  curtain = x;
  console.log(curtain);
} */

function hideAndSeek(input) {
  var x = document.getElementById("attending");
  var y = document.getElementById("notAttending");
  y.style.display = "none";
  if (input == true) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function submitAll() {
  console.log(firstName);
  console.log(lastName);
  console.log(regno);
  console.log(email);
  console.log(studentNo);
  console.log(parentNo);
  console.log(bloodgrp);
  console.log(program);
  console.log(dept);
  console.log(gradyear);
  console.log(gradmonth);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);
  console.log(familyCount);
}

function setDate(date) {
  console.log(date);
}

function StudentInfo() {
  return (
    <div className="I">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Manipal University Jaipur</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/studentInfo">Dashboard</Link>
          </Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        {/* <h5>Tabs go here</h5> */}
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Student Info" className="one">
            <Container>
              <Row>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        onChange={(e) => {
                          firstName = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last Name"
                        onChange={(f) => {
                          lastName = f.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridRegNo">
                      <Form.Label>Registration Number</Form.Label>
                      <Form.Control
                        placeholder="e.g. 1790000..."
                        onChange={(e) => {
                          regno = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

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
                    <Form.Group as={Col} controlId="formGridStudentPhno">
                      <Form.Label>Student Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Student Phone Number"
                        onChange={(e) => {
                          studentNo = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridParentPhno">
                      <Form.Label>Parent Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Parent Phone Number"
                        onChange={(e) => {
                          parentNo = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridBlood">
                      <Form.Label>Blood Group</Form.Label>
                      <Form.Control
                        placeholder="e.g. A+,O-,AB+"
                        onChange={(e) => {
                          bloodgrp = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProgram">
                      <Form.Label>Program</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="btech, ba, llb all small"
                        onChange={(e) => {
                          program = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridDept">
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="CS, IT, etc..."
                        onChange={(e) => {
                          dept = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridGradYear">
                      <Form.Label>Year of Graduation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter your year of graduation"
                        onChange={(e) => {
                          gradyear = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGradMonth">
                      <Form.Label>Graduation Month</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter graduation month"
                        onChange={(e) => {
                          gradmonth = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="Please enter full address e.g. House number, street, etc."
                        onChange={(e) => {
                          address = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          city = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        placeholder="e.g. rajasthan"
                        onChange={(e) => {
                          state = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          zip = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      submitAll();
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="payment" title="Payment" className="two">
            <Container>
              <Form.Row>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend">
                      Will you be attending the Convocation? (Yes by default)
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        defaultChecked
                        label="Yes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={() => {
                          hideAndSeek(true);
                        }}
                      />

                      <Form.Check
                        type="radio"
                        label="No"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        value="0"
                        onClick={() => {
                          hideAndSeek(false);
                        }}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form.Row>
              <Form.Row>
                <div id="attending">
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>
                          Please enter how many family members will be attending
                          (including you)
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            familyCount = e.target.value;
                          }}
                        />
                      </Form.Group>
                    </Form.Row>
                    {/* Dates are here!!! */}
                    <h4>
                      Please select your date for attending the Convocation
                    </h4>
                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox10">
                        <Form.Check
                          type="checkbox"
                          label="10th July"
                          onClick={() => {
                            setDate(10);
                            document.getElementById("formBasicCheckbox12").setAttribute("disabled", true);
                            document.getElementById("formBasicCheckbox14").setAttribute("disabled", true);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox12">
                        <Form.Check
                          type="checkbox"
                          label="12th July"
                          onClick={() => {
                            setDate(12);
                            document.getElementById("formBasicCheckbox10").setAttribute("disabled", true);
                            document.getElementById("formBasicCheckbox14").setAttribute("disabled", true);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox14">
                        <Form.Check
                          type="checkbox"
                          label="14th July"
                          onClick={() => {
                            setDate(14);
                            document.getElementById("formBasicCheckbox10").setAttribute("disabled", true);
                            document.getElementById("formBasicCheckbox12").setAttribute("disabled", true);
                          }}
                        />
                      </Form.Group>
                    </Form.Row>
                  </Form>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      submitAll();
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <div id="notAttending" style={{ display: "none" }}>
                  Please Click the following link to recieve degree by post
                  <br />
                  <Button variant="outline-primary">
                    <Link to="/Degree">Get Degree By Post</Link>
                  </Button>
                </div>
              </Form.Row>
            </Container>
          </Tab>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
}

export default StudentInfo;
