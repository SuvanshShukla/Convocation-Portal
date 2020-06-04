import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  Row,
  Col,
  Tab,
  Tabs,
} from "react-bootstrap";
// import { slide as Menu } from "react-burger-menu";

/* function onSubmit({name}) {
  console.log("this is doing something");
}

function setName(e, {name}) {
    this.setState({
        name: e.target.value
    });
    console.log(name);
    
} */

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
                        // onChange= {e => {setName(e)}}
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
                    <Form.Group as={Col} controlId="formGridStudentPhno">
                      <Form.Label>Student Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Student Phone Number"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridParentPhno">
                      <Form.Label>Parent Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Parent Phone Number"
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
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridDept">
                      <Form.Label>Department</Form.Label>
                      <Form.Control type="text" placeholder="CS, IT, etc..." />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridGradYear">
                      <Form.Label>Year of Graduation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter your year of graduation"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGradMonth">
                      <Form.Label>Graduation Monthp</Form.Label>
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
                      <Form.Control placeholder="House number, street, etc." />
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
                    type="submit" /* onClick={() => {onSubmit()}} */
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
                <Form.Group controlId="formCheckbox">
                  <Form.Label>Will You Attend the Convocation</Form.Label>
                  <Form.Check type="checkbox" label="Yes" />
                  <Form.Check type="checkbox" label="No" />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
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
