import React from 'react';
import './App.css';
import Login from "./Components/Login/Login.js";
import UserHome from "./Components/userHome/UserHome";
import StudentInfo from "./Components/StudentInfo/StudentInfo";
import Welcome from "./Components/Welcome/Welcome"
import Join from './Components/Join/Join';
import Degree from "./Components/Degree/Degree";
import Signup from "./Components/Signup/Signup";
import Admin from './Components/Admin/Admin';
import Pay from "./Components/Pay/Pay";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

// import Signup from "./Components/Signup/Signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.records = [];
    this.state.lengy = "";
  }

  getAll(){
    axios.get("http://localhost:8080/steal").then(res =>{
      let a = res.data
      this.setState({
        records: a
      })
      console.log(res.data);    
      this.setState({
        lengy: a.length
      })
    })
  }

  componentDidMount(){
    this.getAll();
  }


  render(){
    return(
      // <h1>This is the first trial of the Minor Project!!</h1>
      <Router>
        <Route path="/" exact render={props => (<UserHome></UserHome>)} />
        <Route path="/login" exact render={props => (<Login></Login>)} />
        <Route path="/Signup" exact render={props => (<Signup></Signup>)} />
        <Route path="/StudentInfo" exact render={props => (<StudentInfo {...props} name={this.state.name}></StudentInfo>)} />
        <Route path="/Welcome" exact render={props =>(<Welcome></Welcome>)} />
        <Route path="/Join" exact render={props => (<Join></Join>)} />
        <Route path="/Degree" exact render={props => (<Degree></Degree>)} />
        <Route path="/Admin" exact render={(props) => (<Admin {...props} studentRecords={this.state.records} getRecs={this.getAll.bind(this)} len={this.state.lengy}/>)} />
        <Route path="/Pay" exact render={props=>(<Pay></Pay>)} />
      
      </Router>
      
    );
  }
  
}

export default App;
