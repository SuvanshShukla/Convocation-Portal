import React,{Component} from "react";
import "./Join.css";
// import "./try.css";
// import Pay from "./Pay";
import ReactDOM from 'react-dom';

function Join(){
    return(
        <div class="dates">
          <p>Manipal University Jaipur, village-dehmi kalan ,Ajmer road ,Jaipur,Rajasthan,303007 </p>
          <div class="sticky">You are Welcome!</div>
      <h1> when would you like to join the convocation event</h1>
       <div className="hey">
         <div class="container mt-3">
   
              <form /* onSubmit={this.handleSubmit} */> 
               
                        <input type="checkbox" id="defaultCheck" name="example2"/>
                       
                        <label htmlFor="date1">1st july 2020</label>
                              <br/>                    
                        <button type="submit" class="btn btn-primary">Submit</button>
             </form>
         </div>
          
                 
             <div class="container mt-3">
            
                 <form /* onSubmit={this.handleSubmit} */>
                         <input type="checkbox" id="defaultCheck" name="example2"/>
                         
                         <label htmlFor="date2">2nd july 2020</label>
                               <br/>
                         <button type="submit" class="btn btn-primary">Submit</button>
                 </form>
             </div>
      
             <div class="container mt-3">
   
                 <form /* onSubmit={this.handleSubmit} */>
                  
                        <input type="checkbox" id="defaultCheck" name="example2"/>
                        <label htmlFor="date3">3rd july 2020</label>
                              <br/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                 </form>
             </div>
 
 
             </div>
        </div>
      );
}


export default Join;