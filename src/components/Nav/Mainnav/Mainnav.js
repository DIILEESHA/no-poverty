import React, { useState } from "react";
import "./mainnav.css";
import { Link } from "react-router-dom";

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
    window.location = "/sessions";
  };
  return (
    <div
      className={
        colorChange
          ? "main__nav__container colorChange"
          : "main__nav__container"
      }
    >
      <div className="navlogo__title__section">
        <h2 className="navlogo__title">endpoverty</h2>
      </div>
      <div className="nav__ul__section">
        <li className="nav__li__section">home</li>
        <li className="nav__li__section">about us </li>
        <li className="nav__li__section">contact us</li>
        <Link to="/sessions">
          <li className="nav__li__section">sessions</li>
        </Link>
        <li className="nav__li__section">jobs</li>
      </div>
      <div className="nav__credention__btn__section">
        <Link to="/login">
          <button className="nav__btn">login</button>
        </Link>
        <Link to="/Signup">
          <button className="nav__btn">register</button>
        </Link>
      </div>
    </div>
  );
};

export default Mainnav;
