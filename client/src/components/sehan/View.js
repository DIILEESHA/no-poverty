import React, { useState,useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link ,  useParams} from "react-router-dom"
import './view.css'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Subfooter from '../footer/Subfooter/Subfooter'
import Maingooter from '../footer/Mainfooter/Maingooter'
import ReactToPrint from "react-to-print";


export default function View() {

//generate pdf-----------------------------

// let docToPrint = React.createRef();

// const printDocument = () => {
//   const input = docToPrint.current;
//   html2canvas(input).then(canvas => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF({
//       orientation: "landscape",
//       unit: "px",
//       format: [600, 900]
//     });
//     pdf.addImage(imgData, "JPEG", 0, 0);
//     pdf.save("customer list_2021-2-3.pdf");
//   });
// };

//end generate pdf-----------------------------


const [products,setProducts]= useState([]);
const { id } = useParams();
useEffect(() => {
  fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  loadProduct();
}, [id]);


const loadProduct =  async() => {
    // useEffect(()=>{
      const result = await axios.get("http://localhost:5000/product/");
        setProducts(result.data.reverse());
            //      getProducts();

        console.log(result.data);
    }
    //      function getProducts(){
    //          axios.get("http://localhost:5000/product/").then((res)=>{
    //         setProducts(res.data);
            
    //          }).catch((err)=>{
    //              alert(err);
    //          })
    //      }
    //      getProducts();
         
    // },[])
    //search bar

    const [searchText, setSearchText] = useState('');


    const handlesearchArea = value => {
        setSearchText(value);
        filterData(value);   
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if(!lowerCaseValue){
            loadProduct();
        }
        else{      
            const filteredData = products.filter(item => {
                return Object.keys(item).some(key => {
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                })
            });
            setProducts(filteredData);
        }
    }

    //end search

  return (
  <div>
    <Combinenav />
    <div id="body5">
      <div>
    <div className="searchPanel">
    
    {/* <ReactToPrint
    trigger={() =>{
     
      return <button id="reportbtn">Print PDF</button>
    }}
    content = {() =>this.componentRef}
    documentTitle='new document'
    pageStyle= "print"
    
    />             */}
    <div>

      {/* <input type="text"  placeholder="Search here" id="srchform" /> */}
      <form className="searchBar">
                <input type="text" onChange={ e => handlesearchArea(e.target.value)} placeholder="Search here......"/>
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </form>
                </div>
    </div>

<table border = "1" >
  <th id="t1">Products <Link to="/market/new"><button id="btnAdd" type="button">+ Add New</button></Link></th>
    {products.map((val)=>{
  return <tr>
    <td><img src={`http://localhost:5000/${val.image}`} id="imgv"/><p id="p1">Product Name : {val.productname} <p id="p2">Unit Price: Rs:{val.unitprice}</p></p> <Link to={`/market/details/${val._id}`}> <button id="btnv" > View</button> </Link></td>
  </tr>
  
    })}

</table>
</div>
</div>

 <Subfooter />
 <Maingooter />
 </div>
 
    
    
  );
  
  }
