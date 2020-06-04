import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Button, Form, Row, Col, Tab, Tabs } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";


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
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last Name" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridRegNo">
                      <Form.Label>Registration Number</Form.Label>
                      <Form.Control placeholder="e.g. 1790000..." />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProgram">
                      <Form.Label>Program</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="btech, ba, llb all small"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridDept">
                      <Form.Label>Department</Form.Label>
                      <Form.Control type="text" placeholder="CS, IT, etc..." />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="House number, street, etc." />
                  </Form.Group>

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

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="payment" title="payment">
              <h3>Tabs are working!!!</h3>
          </Tab>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
}

export default StudentInfo;
