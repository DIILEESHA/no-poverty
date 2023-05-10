import React, { useState, useEffect } from "react";
import "./singlesession.css";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Maingooter from "../../footer/Mainfooter/Maingooter";
import Subfooter from "../../footer/Subfooter/Subfooter";
import { UserContext } from "../../../context/UserContext";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import moment from "moment";
import BarLoader from "react-spinners/BarLoader";
const SingleSession = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // add this line
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/posts/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
        setIsLoading(false); // set isLoading to false when data is loaded
      });
    });
  }, [id]);

  if (isLoading) {
    // return a spinner if data is still loading
    return (
      <div className="loader-container">
      <BarLoader color={"#0077FF"}  size={150} />
    </div>
    );
  }

  if (!postInfo) return "";
  return (
    <div>
      <Combinenav />

      <div className="singlesession__container">
        <div className="single__session__img">
          <img src={`http://localhost:5000/${postInfo.cover}`} alt="" />
        </div>
        <h2 className="singlesession__title">{postInfo.title}</h2>
        <h3 className="session__author">by @{postInfo.author.username}</h3>
        <h3 className="session__date">
        {moment(postInfo.createdAt).fromNow()}
          {/* {formatISO9075(new Date(postInfo.createdAt))} */}
        </h3>
        <p className="session__para">
        <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
        </p>
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default SingleSession;
