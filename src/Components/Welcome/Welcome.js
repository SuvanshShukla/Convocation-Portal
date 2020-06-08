import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

// import Degree from "./Degree";
// import People from "./People";
import "./Welcome.css";

function Welcome(){
    return(
        <div class="welcome">
            <div className="welcome2">
                <h1>Welcome to convocation portal !!!!</h1>
                
  
                  <button /* onClick={this.join} */><h3>Join the convocation event</h3></button>
                  <button /* onClick={this.getDegree} */><h3>Get Degree by post</h3></button>
                          
                              
                          
            </div>
            </div>
      );
}







export default Welcome;