import React,{Component} from "./node_modules/react";
import { BrowserRouter as Router,Route,Link } from "./node_modules/react-router-dom";
import { Button, Carousel, Container, Row, Col, Form } from "./node_modules/react-bootstrap";
import { slide as Menu } from "./node_modules/react-burger-menu";
import ReactDOM from './node_modules/react-dom';
import "./Signup.css";
//  import Login from "Components/Login/Login";
import Login from "../Login/Login"
 class Signup extends Component{
     constructor(props){
         super(props);
         this.state={
            email:"",
            password:"",
            confirm_password:"",
          }
         
          this.handleChange=this.handleChange.bind(this);
          this.handleChange2=this.handleChange2.bind(this);
          this.handleChange3=this.handleChange3.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);


     }
     handleChange(evt){
        this.setState({email:`${evt.target.value}`});
        
      }
      handleChange2(evt){
        this.setState({password:`${evt.target.value}`});
        
      }
      handleChange3(evt){
        this.setState({confirm_password:`${evt.target.value}`});
      } 

     handleSubmit(evt){
        evt.preventDefault();
        this.setState({
            email:"",
            password:"",
            confirm_password:""
        });
      }

     render(){
         return(
    <div>
         <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        
      </Menu>
      <div class="wrapper">
        <div className="form-wrapper">
        
              <h1>Sign up</h1>
              <form onSubmit={this.handleSubmit}>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    placeholder="email"
                    name="email" 
                    value={this.state.email}
                    onChange={this.handleChange }
                    />
                  </div>
                  
                  <div className="password">
                    <label htmlFor="password">password</label>
                    <input type="password" 
                    placeholder="password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange2 }
                    />
                  </div> 
                  <div className="confirm_password">
                    <label htmlFor="confirm_password">confirm password</label>
                    <input type="password" 
                    placeholder="confirm your password"
                    name="confirm_password" 
                    value={this.state.confirm_password}
                    onChange={this.handleChange3 }
                    />
                  </div> 

                  <div className="createAccount">
                    <button type="submit">Sign up</button>
                               
                    
                    
                                   <p>
                                   <Router className="Next">
                                      <Route  path='/Login' exact strict component={<Login/>} 
                                       
                                      />
                                        
                                      Already Have an Account ? <Link to="/Login" onClick={event =>  window.location.href='/Login'} exact strict>Sign in</Link>                        
                                        
                                      </Router> 
                                      </p>
                    </div>

                  
              </form>
              
        </div>   
        
      </div>
      </div>
         );
     }
 }
  export default Signup;