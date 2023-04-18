import { useState,useEffect } from 'react';
import supli1 from "../images/supli1.jpg"
import supli2 from "../images/supli2.jpg"
import supli3 from "../images/supli3.jpg"
import supli4 from "../images/supli4.jpg"
import "../UserComponent/Shopping.css"
import axios from "axios";


function Shopping() 
{
	
 const[cart,setCart]=useState([{productId:0,productName:"",description:"",productPic:"",price:0,count:0}])
const[product,setProduct]=useState([{productId:0,productName:"",description:"",productPic:"",price:0}]);
  useEffect(() => {
    const getAllProduct = async () => {
      const allProduct = await retrieveAllProduct();
      if (allProduct) {
		
        setProduct({...allProduct,count:0});
        console.log(allProduct)
        
      
      }
      
    };
    
    getAllProduct();
  },[]);

  const retrieveAllProduct = async () => {
    const response = await axios.get("http://localhost:8080/api/product/allproduct");

    return response.data;
  };
  
 
	return(
		product.map(data1=>
			
		 <div className="row product" id={data1.productId}>
		 <hr/>
	  
      <div className="col-md-2">
        <img src={supli1} alt="r" height="150" width="150"/>
      </div>
      <div className="col-md-8 product-detail">
        <h4>{data1.description}</h4>
        <p><button type="button" class="btn btn-primary"onClick={()=>{
			
	
        setCart(...cart,data1)
       console.log(cart);
      
        
		}}
       
        >Add</button></p>
      </div>
      <div className="col-md-2 product-price">
     {data1.price}
     <hr/><button type="button" class="btn btn-primary"></button>
     
      </div>
      
    </div>
	  )
	  
		
		 
	

	)	  
	  
 	
} 
export default Shopping;
