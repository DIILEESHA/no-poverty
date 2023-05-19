import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";
import "./edit.css";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Subfooter from '../footer/Subfooter/Subfooter'
import Maingooter from '../footer/Mainfooter/Maingooter'

const Edit = () => {
  const [productname, setProductname] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [sellername, setSellername] = useState("");
  const [contactno, setContactno] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    function getProduct() {
      axios.get(`http://localhost:5000/product/get/${id}`)
        .then((res) => {
          if (res.data.status) {
            const product = res.data.product;
            setProductname(product.productname);
            setUnitprice(product.unitprice);
            setSellername(product.sellername);
            setContactno(product.contactno);
            setDescription(product.description);
            setImage(product.image);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }

    getProduct();
  }, [id]);

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setSelectedImage(file);
  }

  function update(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("productname", productname);
    data.append("unitprice", unitprice);
    data.append("sellername", sellername);
    data.append("contactno", contactno);
    data.append("description", description);
    if (selectedImage) {
      data.append("image", selectedImage);
    }

    axios.put(`http://localhost:5000/product/update/${id}`, data)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Updated Successfully",
          icon: "success",
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Couldn't Update your Details",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("/market/view");
    }, 2500);
  }

  return (
    <div>
      <Combinenav />
      <div id="body3">
        <form id="f3" onSubmit={update}>
          <h1 id="fz">Update Details</h1>
          {image && <img src={`http://localhost:5000/${image}`} id="imgd" />}

          <div className="form-group">
            <input
              type="text"
              value={productname}
              className="form-control"
              placeholder="Product Name"
              id="inputproductname"
              onChange={(e) => {
                setProductname(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              value={unitprice}
              className="form-control"
              id="inputunitprice"
              placeholder="Unit Price"
              onChange={(e) => {
                setUnitprice(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={sellername}
              className="form-control"
              id="inputsellername"
              placeholder="Seller Name"
              onChange={(e) => {
                setSellername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              value={contactno}
              className="form-control"
              id="inputcontactnumber"
              placeholder="Contact Number"
              onChange={(e) => {
                setContactno(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={description}
              className="form-control"
              id="inputdescription"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="inputimage"
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <button type="submit" id="btnedit2">Update</button>
          </div>
        </form>
      </div>
      <Subfooter />
      <Maingooter />
    </div>
  );
};

export default Edit;
