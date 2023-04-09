import React from "react";
import "./login.css";
import logo from "../../../assets/log.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__left">
        <div className="login__left__container">
          <h1 className="login__title">login</h1>
          <div className="log__conditions">
            <label className="login__label">Email</label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="login__input__combiner"
            />
          </div>
          <div className="log__conditions">
            <label className="login__label">Password</label>
            <input
              type="password"
              placeholder="*****"
              className="login__input__combiner"
            />
          </div>
          <button className="log__btn">login</button>
          <span className="log__span">
            Have not an Account?
            <Link to="/signup">
              <span
                style={{
                  color: "#0C6E68",
                  padding: "0px 2px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </span>
            </Link>
          </span>
        </div>
      </div>
      <div className="login__right">
        <div className="login__right__container">
          <div className="log__imager">
            <img src={logo} alt="log__image" className="log__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
