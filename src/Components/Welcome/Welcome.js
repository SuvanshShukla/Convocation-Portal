import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


// import Degree from "./Degree";
// import People from "./People";
import "./welcome2.css";


function Welcome() {
  return (
    <div class="welcome">
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://jaipur.manipal.edu/">Manipal University Jaipur</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/studentInfo">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="https://jaipur.manipal.edu/muj/contact-us.html" target="_blank">Contact</Nav.Link>
            <Nav.Link href="https://jaipur.manipal.edu/muj/about-us.html" target="_blank">About</Nav.Link>
            <span class="highlighty"><Nav.Link href="https://jaipur.manipal.edu/muj/admission.html" target="_blank">Admissions</Nav.Link></span>
          </Nav>
          <span class="highlight2"><Nav.Link href="https://www.facebook.com/manipal.university/" target="_blank"><a href="https://www.facebook.com/manipal.university/" target="_blank" class="fa fa-facebook"></a></Nav.Link></span>
          <span class="heyt"><Nav.Link href="https://twitter.com/Jaipur_Manipal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/" target="_blank"><a href="https://twitter.com/Jaipur_Manipal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/" target="_blank" class="fa fa-twitter"></a></Nav.Link></span>
          <span class="heyyou"><Nav.Link href="https://www.youtube.com/channel/UCFbeX4UJyd4fHTCnCVGob_Q" target="_blank"><a href="https://www.youtube.com/channel/UCFbeX4UJyd4fHTCnCVGob_Q" target="_blank" class="fa fa-youtube"></a></Nav.Link></span>
          <span class="heyinsta"><Nav.Link href="https://www.instagram.com/jaipurmanipal/?hl=en" target="_blank"><a href="https://www.instagram.com/jaipurmanipal/?hl=en" target="_blank" class="fa fa-instagram"></a></Nav.Link></span>
          <span class="heylink"><Nav.Link href="https://www.linkedin.com/school/manipal-university-jaipur/" target="_blank"><a href="https://www.linkedin.com/school/manipal-university-jaipur/" target="_blank" class="fa fa-linkedin"></a></Nav.Link></span>
         
        </Navbar>
      </div>
      <div class="con">
      <h1>Welcome to convocation portal !!!!</h1>
      <div class="d">
      <div class="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vhnhUq8E-ZA" frameborder="0" align="left" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video-responsive2">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ODoWIN8Ygbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    <strong class="log">
    <a href="/">
        <img src="https://www.lawof.in/wp-content/uploads/2019/08/manipal-university-jaipur-logo-11-237x300.png"/>
    </a>
    </strong>
    <h2>Manipal University Jaipur - 67 years of legacy of Manipal Education‎</h2>
   <strong class="border"><Link to="/studentInfo" exact strict>
                      Dashboard
                    </Link></strong> 
      </div>       
       </div>
  );
}

export default Welcome;
