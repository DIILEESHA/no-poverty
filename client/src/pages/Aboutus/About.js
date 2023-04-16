import React from "react";
import "./bout.css";
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";

const About = () => {
  return (
    <div className="about__container">
      <Combinenav />
      <div className="about__card">
        <div className="about__details">
          <h2 className="about__title">about us</h2>
          <p className="about__para">
            What does CARE do? We save lives, defeat poverty, achieve social
            justice, and fight for women and girls.
          </p>
        </div>

        <img
          className="about__img"
          src="https://images.unsplash.com/photo-1541482492732-6fef23322336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default About;
