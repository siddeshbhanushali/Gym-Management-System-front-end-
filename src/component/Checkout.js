import { useContext } from "react";
import { CartContext } from "./Cart";
import { useLocation } from "react-router-dom";
import img1 from "../images/thankyou.png";
import Header from '../pages/Header';
import "./cart.css"
const Checkout = () => {
  const a=useLocation();
  
     return (
    <div className="container-fluid mb-2">
     
    
       <div className="d-flex rounded-circle justify-content-center" >
       
      <img src={img1} class="img-fluid" alt="thank you" height={500} width={500} id="th"></img>
    </div>
    <br />
    <div className="d-flex justify-content-center pt-2" id="thank">
    
       
    <h1>Total Amount  :  {a.state.totalAmount}</h1>
     </div>
   
    
    
 
   
      
    
 
      
    </div>
  );
};


export default Checkout;