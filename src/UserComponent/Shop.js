import { useState,useEffect } from 'react';
import supli1 from "../images/supli1.jpg"
import supli2 from "../images/supli2.jpg"
import supli3 from "../images/supli3.jpg"
import supli4 from "../images/supli4.jpg"

import axios from "axios"
const Shop=()=>
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
		product.map((data)=>
	<div class="card-group">
  <div class="card" id="data.">
    <img class="card-img-top" src={supli1} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </div>
  ))
  }
  export default Shop;