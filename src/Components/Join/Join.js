 import React,{Component} from "react";
 import {Button} from "react-bootstrap";
 import "./Join.css";
 import "./sticky.css";



import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Join(){
    return(
        <div>
        <div class="dates">
          <p>Manipal University Jaipur, village-dehmi kalan ,Ajmer road ,Jaipur,Rajasthan,303007 </p>
          <div class="sticky">You are Welcome!</div>
          <h1 className="c">when would you like to join the convocation event</h1>
       <div className="hey">
         <div class="container mt-3">
             
              <form > 
               
                        <input type="checkbox" id="defaultCheck" name="example2"/>
                       
                        <span class="h"><label htmlFor="date1">1st july 2020</label></span>
                              <br/>                    
                              <Button><Link to="/Pay">Submit</Link></Button>
             </form>
         </div>
          
                 
             <div class="container mt-3">
            
                 <form >
                         <input type="checkbox" id="defaultCheck" name="example2"/>
                         
                         <span class="h"><label htmlFor="date2">2nd july 2020</label></span>
                               <br/>
                               <Button> <Link to="/Pay">Submit</Link></Button>
                         
                 </form>
             </div>
      
             <div class="container mt-3">
   
                 <form >
                  
                        <input type="checkbox" id="defaultCheck" name="example2"/>
                       <span class="h"><label htmlFor="date3">3rd july 2020</label></span>
                              <br/>
                    
                              <Button><Link to="/Pay">Submit</Link></Button>
                 </form>
                 
             </div>
 
 
             </div>
        </div>
        </div>
      );
}


export default Join;