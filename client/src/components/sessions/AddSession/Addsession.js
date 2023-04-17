import React from "react";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Mainfooter from "../../footer/Mainfooter/Maingooter";
import Subfooter from "../../footer/Subfooter/Subfooter";
import "./addsession.css";
import Reactquill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const Addsession = () => {
  return (
    <>
      <Combinenav />
      <div className="add__session__container">
        <form action="">
          <div className="add__input__credentails">
            <input className="add__input" type="text" placeholder="title" />
          </div>
          <div className="add__input__credentails">
            <input className="add__input" type="text" placeholder="title" />
          </div>
          <div className="add__input__credentails">
            <input className="add__input" type="file" placeholder="title" />
          </div>
          <div className="add__input__credentails">
            {/* <textarea className="add__input__text" name="" id="" cols="50" rows="30" placeholder="description"></textarea> */}
            <Reactquill className="dr"/>
          </div>
          <div className="add__input__credentails">
            <button className="adder__btn">save session</button>
          </div>
        </form>
      </div>
      <Mainfooter />
      <Subfooter />
    </>
  );
};

export default Addsession;
