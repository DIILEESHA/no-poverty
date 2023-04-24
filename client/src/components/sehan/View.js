import React, { useState,useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom"
import './view.css'
import axios from "axios";

export default function View() {




const [products,setProducts]= useState([]);

    useEffect(()=>{
         function getProducts(){
             axios.get("http://localhost:5000/product/").then((res)=>{
            setProducts(res.data);
            
             }).catch((err)=>{
                 alert(err);
             })
         }
         getProducts();
         
    },[])

  return (
  <div>

<table border = "1">
  <th id="t1">Products</th>
    {products.map((val)=>{
  return <tr>


    <td><img src="https://i.pinimg.com/736x/b9/02/b9/b902b9aad58334dd19ad738bfb0083a2--broom-corn-things-i-want.jpg" id="imgv"/><p id="p1">Product Name : {val.productname} <p id="p2">Unit Price: Rs:{val.unitprice}</p></p> <Link to={`/details/${val._id}`}> <button id="btnv" > View</button> </Link></td>
  </tr>
    })}

</table>


 </div>
 
    
    
  );
  
  }
