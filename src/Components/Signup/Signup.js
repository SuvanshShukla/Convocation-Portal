import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu> */}
      <div class="wrapper">
        <div className="form-wrapper">
          <h1>Sign up</h1>
          <form /* onSubmit={this.handleSubmit} */>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                // value={this.state.email}
                // onChange={this.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                // value={this.state.password}
                // onChange={this.handleChange2}
              />
            </div>
            <div className="confirm_password">
              <label htmlFor="confirm_password">confirm password</label>
              <input
                type="password"
                placeholder="confirm your password"
                name="confirm_password"
                // value={this.state.confirm_password}
                // onChange={this.handleChange3}
              />
            </div>

            <div className="createAccount">
              <button type="submit">Sign up</button>
                <div>
                  Already have an Account?
                  <Link to="/Login">Click Here</Link>
                </div>
             {/*  <p>
                <Router className="Next">
                  <Route path="/Login" exact strict component={<Login />} />
                  Already Have an Account ?{" "}
                  <Link
                    to="/Login"
                    onClick={(event) => (window.location.href = "/Login")}
                    exact
                    strict
                  >
                    Sign in
                  </Link>
                </Router>
              </p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;