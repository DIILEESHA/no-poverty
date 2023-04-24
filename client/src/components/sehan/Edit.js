import React, { useState,useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import{Link,useParams} from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";

const  Edit= () => {
  const [productname, setProductname] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [sellername, setSellername] = useState("");
  const [contactno, setContactno] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();


  useEffect(() => {
    function getProduct() {
      axios.get(`http://localhost:5000/product/get/${id}`).then((res) => {

        if (res.data.status) {
          setProductname(res.data.product.productname);
          setUnitprice(res.data.product.unitprice);
          setSellername(res.data.product.sellername);
          setContactno(res.data.product.contactno);
          setDescription(res.data.product.description);
          
        }
      }).catch((err)=>{

        alert(err);
      });
    }

    getProduct();
  },[]);

  function update(e) {

    e.preventDefault();

    const data = {
      productname,
      unitprice,
      sellername,
      contactno,
      description
    };

    axios.put(`http://localhost:5000/product/update/${id}`, data).then(() => {

      Swal.fire({

        title: "Success!",
        text: "Updated Successfully",
        icon: "success",
        showConfirmButton: false,
      });



    }).catch((err) => {

      Swal.fire({
        title: "Error!",
        text: "Couldn't Update your Details",
        type: "error",
      });
    });

    setTimeout(() => {
      window.location.replace("/view");
    }, 2500)
  }

  return (
    
    <div id="body3">
   
   <form id="f1" onSubmit={update}>
     <h1 id="fz">Update Details</h1>
      <img src="https://i.pinimg.com/736x/b9/02/b9/b902b9aad58334dd19ad738bfb0083a2--broom-corn-things-i-want.jpg"  id="imgd"/>

      
            

            <div class="form-group">
              <input
                type="text"
                value={productname}
                class="form-control"
                id="inputproductname"
                onChange={(e) => {
                  setProductname(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="Number"
                value={unitprice}
                class="form-control"
                id="inputunitprice"
                placeholder="Unit Price"
                onChange={(e) => {
                  setUnitprice(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                value={sellername}
                class="form-control"
                id="inputsellername"
                placeholder="Seller Name"
                onChange={(e) => {
                  setSellername(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="Number"
                value={contactno}
                class="form-control"
                id="inputcontactnumber"
                placeholder="Contact Number"
                onChange={(e) => {
                  setContactno(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                value={description}
                class="form-control"
                id="inputdescription"
                placeholder="Discription"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="validatedCustomFile"
                
              />
              <p id="pnew">Upload Product Image</p>
            </div>
            <div>
             
                <button type="submit"  id="btnedit2"> update</button>
                
              
            </div>
          </form>
     
    

      
      
     
 </div>
 
 
    
    
  );
};

export default Edit;