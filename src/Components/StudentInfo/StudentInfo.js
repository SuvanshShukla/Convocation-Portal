import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Button, Form, Row, Col, Tab, Tabs } from "react-bootstrap";
// import { slide as Menu } from "react-burger-menu";

/* function onSubmit({name}) {
  console.log("this is doing something");
} */
var firstName = "";
var lastName = "";
var regno, email, phone, guardph, bloodgrp, program, dept, gradyear, gradmonth, address ="";

function setDetails(expression) {
  /* firstName = e.target.value;
  lastName = f.target.value; */
  if(expression == e.target.value)

}

function submitName() {
  console.log(firstName);
  console.log(lastName);
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
                          setDetails(e);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last Name"
                        onChange={(f) => {
                          setDetails(f);
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
                          setDetails(e);
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
                          setDetails(e);
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
                          setDetails(e);
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
                          setDetails(e);
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridBlood">
                      <Form.Label>Blood Group</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProgram">
                      <Form.Label>Program</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="btech, ba, llb all small"
                        onChange={(e) => {
                          setDetails(e);
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
                          setDetails(e);
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
                          setDetails(e);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGradMonth">
                      <Form.Label>Graduation Month</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="Please enter full address e.g. House number, street, etc."
                        onChange={(e) => {
                          setDetails(e);
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control placeholder="e.g. rajasthan" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      submitName();
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
