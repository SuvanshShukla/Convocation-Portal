import React from "react";
//import nl2br from 'react-newline-to-break';
import "./Pay.css";

function Pay() {
  return (
    <div className="Payment">
      <h1 class="f">select your payment mode</h1>
      <h1>
        convocation fees <i class="fa fa-inr">1500</i>
      </h1>
      <div className="Payment-inside">
        <div className="hello">
          <i className="fa fa-spinner fa-spin">pay your fees here</i>
        </div>
     
        <form>
         <span class="h"> <input type="radio" name="gender" value="male" />
          PAYTM </span>
          < span class="h"><input type="radio" name="gender" value="female" />
          DEBIT CARD</span>
          < span class="h"><input type="radio" name="gender" value="other" /> Others</span>
        </form>
        
      </div>
    </div>
  );
}

export default Pay;
