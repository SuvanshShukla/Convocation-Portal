import React from "react";
import "./App.css";
import Login from "./Components/Login/Login.js";
import UserHome from "./Components/userHome/UserHome";
import StudentInfo from "./Components/StudentInfo/StudentInfo";
import Welcome from "./Components/Welcome/Welcome";
import Join from "./Components/Join/Join";
import Degree from "./Components/Degree/Degree";
import Signup from "./Components/Signup/Signup";
import Admin from "./Components/Admin/Admin";
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
    this.state.loginEmail = "";
    this.state.loginPassword = "";
    this.state.registerEmail = "";
    this.state.registerPassword = "";
  }

  getAll() {
    axios.get("http://localhost:8080/steal").then((res) => {
      let a = res.data;
      this.setState({
        records: a,
      });
      console.log(res.data);
      this.setState({
        lengy: a.length,
      });
    });
  }

  componentDidMount() {
    this.getAll();
  }

  getRegEmail(e) {
    this.setState({
      registerEmail: e.target.value,
    });
  }

  getRegPassword(e) {
    this.setState({
      registerPassword: e.target.value
    })
  }

  getLogEmail(e) {
    this.setState({
      loginEmail: e.target.value
    })
  }

  getLogPassword(e) {
    this.setState({
      loginPassword: e.target.value
    })
  }

  register() {
    axios({
      method: "POST",
      data: {
        email: this.state.registerEmail,
        password: this.state.registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:8080/register",
    }).then((res) => console.log(res));
  }

  login() {
    axios({
      method: "POST",
      data: {
        email: this.state.loginEmail,
        password: this.state.loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:8080/login",
    }).then((res) => console.log(res));
  }

  render() {
    return (
      // <h1>This is the first trial of the Minor Project!!</h1>
      <Router>
        <Route path="/" exact render={(props) => <UserHome></UserHome>} />
        <Route
          path="/login"
          exact
          render={(props) => (
            <Login
              {...props}
              /* logPass={this.state.loginPassword}
              logEmail={this.state.loginEmail} */
              loginFunction={this.login.bind(this)}
              getLogEmail={this.getLogEmail.bind(this)}
              getLogPassword={this.getLogPassword.bind(this)}
            />
          )}
        />
        <Route
          path="/Signup"
          exact
          render={(props) => (
            <Signup
              {...props}
              /* regEmail={this.state.registerEmail} regPass={this.state.registerPassword} */
              regfunction={this.register.bind(this)}
              getRegEmail={this.getRegEmail.bind(this)}
              getRegPass={this.getRegPassword.bind(this)}
            />
          )}
        />
        <Route
          path="/StudentInfo"
          exact
          render={(props) => (
            <StudentInfo {...props} name={this.state.name}></StudentInfo>
          )}
        />
        <Route path="/Welcome" exact render={(props) => <Welcome></Welcome>} />
        <Route path="/Join" exact render={(props) => <Join></Join>} />
        <Route path="/Degree" exact render={(props) => <Degree></Degree>} />
        <Route
          path="/Admin"
          exact
          render={(props) => (
            <Admin
              {...props}
              studentRecords={this.state.records}
              getRecs={this.getAll.bind(this)}
              len={this.state.lengy}
            />
          )}
        />
        <Route path="/Pay" exact render={(props) => <Pay></Pay>} />
      </Router>
    );
  }
}

export default App;
