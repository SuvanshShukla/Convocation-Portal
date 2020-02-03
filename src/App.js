import React from 'react';
import './App.css';
import Login from "./Components/Login.js";
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      // <h1>This is the first trial of the Minor Project!!</h1>
      <Router>
        <Route
          path="/login"
          exact
          render = {
            <Login></Login>
          } />
      </Router>
    )
  }
  
}

export default App;
