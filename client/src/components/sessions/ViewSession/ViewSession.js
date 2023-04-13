import React from "react";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Subfooter from "../../footer/Subfooter/Subfooter";
import Maingooter from "../../footer/Mainfooter/Maingooter";
import "./viewsession.css";
import fakedata from "./Viewfake";
import { Link } from "react-router-dom";

const ViewSession = () => {
  return (
    <div>
      <Combinenav />

      {fakedata.map((fake) => {
        return (
          <>
            <div className="card">
              <div className="card__img">
                <img className="card__img1" src={fake.img} alt="" />
              </div>
              <div className="card__details">
                <Link to="/session">
                  <h1 className="card__title">{fake.title}</h1>
                </Link>

                <div className="card__user">
                  <h2 className="username">{fake.author}</h2>
                  <h2 className="date">{fake.date}</h2>
                </div>
                <p className="card__para">{fake.para}</p>
              </div>
            </div>
          </>
        );
      })}

      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default ViewSession;
