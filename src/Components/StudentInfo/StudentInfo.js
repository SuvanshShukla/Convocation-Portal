import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./studentInfo.css";
import axios from "axios";
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


let obj = {
  firstName:"",
  lastName:"",
  regno:"",
  email:"",
  studentNo:"",
  parentNo:"",
  bloodgrp:"",
  program:"",
  dept:"",
  gradyear:"",
  gradmonth:"",
  address:"",
  city:"",
  state:"",
  zip:"",
  familyCount:"",
  chosenDate:""
}



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
  console.log(obj.firstName);
  console.log(obj.lastName);
  console.log(obj.regno);
  console.log(obj.email);
  console.log(obj.studentNo);
  console.log(obj.parentNo);
  console.log(obj.bloodgrp);
  console.log(obj.program);
  console.log(obj.dept);
  console.log(obj.gradyear);
  console.log(obj.gradmonth);
  console.log(obj.address);
  console.log(obj.city);
  console.log(obj.state);
  console.log(obj.zip);
  console.log(obj.familyCount);
  console.log(obj);
}

function pushData(){
  let data = obj;
  axios.post ("http://localhost:8080/sendData", data).then(res =>{
    console.log("sending data");
    
  })
}


function setDate(date) {
  if(date == 10){
    document.getElementById("formHorizontalDateRadio14").disabled = true;/* setAttribute("disabled", true); */
    document.getElementById("formHorizontalDateRadio12").disabled = true;/* setAttribute("disabled", true); */
  }else if(date == 12){
    document.getElementById("formHorizontalDateRadio10").disabled = true;/* setAttribute("disabled", true); */
    document.getElementById("formHorizontalDateRadio14").disabled = true;/* setAttribute("disabled", true); */
  }else if(date ==14){
    document.getElementById("formHorizontalDateRadio10").disabled = true;/* setAttribute("disabled", true); */
    document.getElementById("formHorizontalDateRadio12").disabled = true;/* setAttribute("disabled", true);  */
  }
  console.log(date);
}

function resetDate(){
  document.getElementById("formHorizontalDateRadio10").checked = false;
  document.getElementById("formHorizontalDateRadio12").checked = false;
  document.getElementById("formHorizontalDateRadio14").checked = false;
  document.getElementById("formHorizontalDateRadio10").disabled = false;/* setAttribute("disabled", "enabled"); */
  document.getElementById("formHorizontalDateRadio12").disabled = false;/* setAttribute("disabled", "enabled"); */
  document.getElementById("formHorizontalDateRadio14").disabled = false;/* setAttribute("disabled", "enabled"); */
  console.log(obj.chosenDate);  
}




function StudentInfo(){  
  return (
    <div className="I">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Manipal University Jaipur</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/studentInfo">Dashboard</Link>
          </Nav.Link>
          <Nav.Link href="/Welcome">Welcome</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        {/* <h5>Tabs go here</h5> */}
        <Tabs defaultActiveKey="Student Info" id="uncontrolled-tab-example">
          <Tab eventKey="Student Info" title="Student Info" className="one">
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
                          obj.firstName = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last Name"
                        onChange={(f) => {
                          obj.lastName = f.target.value;
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
                          obj.regno = e.target.value;
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
                          obj.email = e.target.value;
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
                          obj.studentNo = e.target.value;
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
                          obj.parentNo = e.target.value;
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
                          obj.bloodgrp = e.target.value;
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
                          obj.program = e.target.value;
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
                          obj.dept = e.target.value;
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
                          obj.gradyear = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGradMonth">
                      <Form.Label>Graduation Month</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please enter graduation month"
                        onChange={(e) => {
                          obj.gradmonth = e.target.value;
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
                          obj.address = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          obj.city = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        placeholder="e.g. rajasthan"
                        onChange={(e) => {
                          obj.state = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          obj.zip = e.target.value;
                        }}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                      submitAll();
                      pushData();
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Event Info" title="Event Info" className="two">
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
                        <h4>please select the number of people attending the event</h4>
                      <form>
                         <label htmlFor="quantity">People (between 1 and 4):</label>
                         <input type="number" id="quantity" name="quantity" min="1" max="4"/>
                         <input 
                        onChange={(e) => {
                          obj.familyCount= e.target.value;
                        }}
                        onClick={() => {
                          submitAll();
                        }}
                        type="submit"/>
                     </form>
                        
                      </Form.Group>
                    </Form.Row>
                    {/* Dates are here!!!  */}
                    <h4>
                      Please select your date for attending the Convocation
                    </h4>
                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox10">
                      <Form.Check
                        type="radio"
                        label="10th July"
                        name="formHorizontalRadios"
                        id="formHorizontalDateRadio10"
                        value="0"
                        disabled={false}
                        onClick={() => {obj.chosenDate ="10"}}
                      />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox12">
                      <Form.Check
                        type="radio"
                        label="12th July"
                        name="formHorizontalRadios"
                        id="formHorizontalDateRadio12"
                        value="0"
                        onClick={() => {obj.chosenDate ="12"}}
                        
                      />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group controlId="formBasicCheckbox14">
                      <Form.Check
                        type="radio"
                        label="14th July"
                        name="formHorizontalRadios"
                        id="formHorizontalDateRadio14"
                        value="0"                
                        onClick={() => {obj.chosenDate ="14"}}
                      />
                      </Form.Group>
                    </Form.Row>

                    <Button onClick={() =>{setDate(obj.chosenDate)}}>Set Date</Button>
                    <Button onClick={() => { obj.chosenDate = ""; resetDate();}}>Reset Date</Button>
                   
                  </Form>
                  
                  <Link to="/Join" className="btn btn-primary">Choose your date</Link>
                </div>
                <div id="notAttending" style={{ display: "none" }}>
                  Please Click the following link to recieve degree by post
                  <br/>
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
