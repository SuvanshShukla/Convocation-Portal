import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Button, Form, Row, Col, Tab, Tabs } from "react-bootstrap";
// import { slide as Menu } from "react-burger-menu";

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
  zip = "";

function submitAll() {
  console.log(firstName);
  console.log(lastName);
  console.log(regno);
  console.log(email);
  console.log(studentNo);
  console.log(parentNo);
  console.log(program);
  console.log(dept);
  console.log(gradyear);
  console.log(gradmonth);
  console.log(address);
  console.log(city);
  console.log(state);
  console.log(zip);  
}

function StudentInfo() {
  return (
    <div>
      <div>
        <h5>Tabs go here</h5>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
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
                      <Form.Control onChange={(e) => {
                        city = e.target.value;
                      }}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control 
                      placeholder="e.g. rajasthan"
                      onChange = {(e) => {
                        state = e.target.value;
                      }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control 
                      onChange = {(e) => {
                        zip = e.target.value;
                      }} />
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
          <Tab eventKey="payment" title="payment">
            <Container>
              <Form.Row>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend">
                      Will you be attending the Convocation?
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Form.Row>
              <Button variant="primary" type="button">
                Submit
              </Button>
            </Container>
          </Tab>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
}

export default StudentInfo;
