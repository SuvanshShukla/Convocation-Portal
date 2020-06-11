import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./studentInfo.css";
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
var persons="";
var chosenDate = "";
 

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


/* function people(){
  console.log(persons);
} */


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
  console.log(chosenDate);  
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
                          familyCount= e.target.value;
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
                        onClick={() => {chosenDate ="10"}}
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
                        onClick={() => {chosenDate ="12"}}
                        
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
                        onClick={() => {chosenDate ="14"}}
                      />
                      </Form.Group>
                    </Form.Row>

                    <Button onClick={() =>{setDate(chosenDate)}}>Set Date</Button>
                    <Button onClick={() => { chosenDate = ""; resetDate();}}>Reset Date</Button>
                   
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
