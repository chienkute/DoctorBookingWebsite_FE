import React, { useEffect, useState } from "react";

import "./NewsLarge.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const ItemSmall = (props) => {
  const {
    key,
    id_blog,
    category,
    date,
    id_category,
    doctor,
    id_doctor,
    content,
    image,
    title,
    avatar,
  } = props;
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  useEffect(() => {
    SetLoadingSkeleton(true);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 2000);
  }, []);
  return (
    <li className="NewsItem col-3" key={key}>
      <div className="NewsImage">
        {loadingSkeleton ? (
          <Skeleton width="300px" height="185px"></Skeleton>
        ) : (
          <Link to={`/blog/${id_blog}`} className="clear">
            <img
              src={image || blogImg}
              alt="Blog Img"
              style={{ height: "185px" }}
            ></img>
          </Link>
        )}
      </div>
      <div className="NewsCategory">
        {loadingSkeleton ? (
          <Skeleton count={1} width="94%"></Skeleton>
        ) : (
          <Link
            to={`/category/${id_category}/${category}`}
            className="clear bold"
            style={{ color: "green" }}
          >
            {category}
          </Link>
        )}
      </div>
      <div className="NewsTitle">
        {loadingSkeleton ? (
          <Skeleton count={1} width="94%"></Skeleton>
        ) : (
          <Link to={`/blog/${id_blog}`} className="clear bold">
            {title || "Tiêu đề"}
          </Link>
        )}
      </div>
      <div className="NewsAuthorAndTime">
        {loadingSkeleton ? (
          <Skeleton count={1} width="301px" height="15px"></Skeleton>
        ) : (
          <Link o={`/care/doctor/${id_doctor}`} className="clear">
            <img src={avatar || avtImg} placeholder="Avatar" alt=""></img>
            <span>
              Được viết bởi <b>{doctor}</b> - {date}
            </span>
          </Link>
        )}
      </div>
    </li>
  );
};
export default ItemSmall;
