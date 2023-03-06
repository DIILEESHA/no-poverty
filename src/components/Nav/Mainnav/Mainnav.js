import React, { useState } from "react";
import "./mainnav.css";

const Mainnav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const goContact = () => {
    window.location = "/contact";
  };
  return (
    <div
      className={
        colorChange ? "main__nav__container colorChange" : "main__nav__container"
      }
    >
      <div className="navlogo__title__section">
        <h2 className="navlogo__title">endpoverty</h2>
      </div>
      <div className="nav__ul__section">
        <li className="nav__li__section">home</li>
        <li className="nav__li__section">about us </li>
        <li className="nav__li__section">contact us</li>
        <li className="nav__li__section">sessions</li>
        <li className="nav__li__section">jobs</li>
      </div>
      <div className="nav__credention__btn__section">
        <button className="nav__btn">login</button>
        <button className="nav__btn">register</button>
      </div>
    </div>
  );
};

export default Mainnav;
