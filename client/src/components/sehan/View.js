import React, { useState,useEffect} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom"
import "./view.css";
import axios from "axios";

export default  function View() {

  const [products,setProducts] = useState([]);
  const [inputText,setInputText] = useState("");
  
function getProducts() {
  axios.get("http://localhost:5000/product/")
        .then((res) =>{
            console.log(res.products);
            setProducts(res.products)

        });
}


  return (
  <div>
   
    <input type ="text" id="search" placeholder="Search here..."/>

      

<table border = "1">
  <th id="t1">Products</th>
  <tr>

    <td><img src="https://i.pinimg.com/736x/b9/02/b9/b902b9aad58334dd19ad738bfb0083a2--broom-corn-things-i-want.jpg" id="imgv"/><p id="p1">Product Name : Broom <p id="p2">Unit Price: Rs:300.00</p></p> <Link to="/details"> <button id="btnv"> View</button> </Link></td>
  </tr>
  <tr>
    <td><img src="https://th.bing.com/th/id/OIP.bFAGF8kIyar_gIM65QrBGwHaFY?pid=ImgDet&rs=1" id="imgv"/> <p id="p1">Product Name : Pottery<p id="p2">Unit Price: Rs:500.00</p></p> <Link to="/details"><button id="btnv">View</button></Link></td>
  </tr>
  <tr>
    <td><img src="https://th.bing.com/th/id/OIP.FftBp9DhS-0rrGk1kwt8UQAAAA?pid=ImgDet&w=340&h=270&rs=1" id="imgv"/><p id="p1">Product Name :Snoops <p id="p2">Unit Price: Rs:200.00</p></p> <Link to="/details"><button id="btnv">View</button></Link></td>
  </tr>
</table>

<div>
   <button id="next">Next..</button>
  </div>

 </div>



  );
}

