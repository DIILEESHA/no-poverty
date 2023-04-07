import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

const New = () => {

  return (
    
  <div>
   <body id="body1">
  <form>
  <h1>Add Product</h1>
  <div class="form-group">
    <input type="text" class="form-control" id="inputproductname"  placeholder="Product Name"  />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputunitprice" placeholder="Unit Price"  />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputsellername" placeholder="Seller Name"  />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="inputcontactnumber" placeholder="Contact Number"  />
  </div>
  <div class="form-group">
    <input type="textarea" class="form-control" id="inputdescription" placeholder="Discription"/>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required />
    <p>Upload Product Image</p>
  </div>
 <div>
   <input type="submit"  id="btn1"/>
  </div>
 </form>
 </body>
 </div>
 
 
    
    
  );
};

export default New;
