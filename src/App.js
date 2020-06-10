import React from 'react';
import './App.css';
import Login from "./Components/Login/Login.js";
import UserHome from "./Components/userHome/UserHome";
import StudentInfo from "./Components/StudentInfo/StudentInfo";
import Welcome from "./Components/Welcome/Welcome"
import Join from './Components/Join/Join';
import Degree from "./Components/Degree/Degree";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Components/Welcome/Admin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state ={
      name: "",
    } ;
  }

  render(){
    return(
      // <h1>This is the first trial of the Minor Project!!</h1>
      <Router>
        <Route path="/login" exact render={props => (<Login></Login>)} />
        <Route path="/UserHome" exact render={props => (<UserHome></UserHome>)} />
        <Route path="/StudentInfo" exact render={props => (<StudentInfo {...props} name={this.state.name}></StudentInfo>)} />
        <Route path="/Welcome" exact render={props =>(<Welcome></Welcome>)} />
        <Route path="/Join" exact render={props => (<Join></Join>)} />
        <Route path="/Degree" exact render={props => (<Degree></Degree>)} />
        <Route path="/Admin" exact render={props=>(<Admin></Admin>)} />
      </Router>
    );
  }
  
}

export default App;
