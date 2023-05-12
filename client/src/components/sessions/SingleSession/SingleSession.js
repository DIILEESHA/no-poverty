import React, { useState, useEffect, useContext } from "react";
import "./singlesession.css";
import Combinenav from "../../Nav/Combinednav/Combinenav";
import Maingooter from "../../footer/Mainfooter/Maingooter";
import Subfooter from "../../footer/Subfooter/Subfooter";
import { UserContext } from "../../../context/UserContext";
import { Link, useParams, useHistory, Navigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import moment from "moment";
import BarLoader from "react-spinners/BarLoader";

const SingleSession = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  // const history = useHistory(); // add this line

  useEffect(() => {
    fetch(`http://localhost:5000/posts/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
        setIsLoading(false);
      });
    });
  }, [id]);

  const handleDelete = () => {
    const token = userInfo.token;
    fetch(`http://localhost:5000/posts/post/${postInfo._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        // redirect to home page if the post was deleted successfully
        // history.push("/");
        <Navigate to={"/"} />;
      } else {
        // show an error message if the delete operation failed
        response.json().then((data) => {
          alert(`Failed to delete post: ${data.message}`);
        });
      }
    });
  };

  
  if (isLoading) {
    return (
      <div className="loader-container">
        <BarLoader color={"#0077FF"} size={150} />
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
        {userInfo.id === postInfo.author._id && (
          <div className="edit-row">
            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <button className="edit-btn">
                <BiEdit className="tryq" />
              </button>{" "}
            </Link>
            <button className="edit-btn" onClick={handleDelete}>
              {" "}
              {/* add onClick handler */}
              <AiFillDelete className="tryq" />
            </button>
          </div>
        )}
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
    </div>
  );
};

export default SingleSession;
