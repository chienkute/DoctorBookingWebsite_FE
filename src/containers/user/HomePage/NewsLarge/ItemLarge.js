import React, { useEffect, useState } from "react";

import "./NewsLarge.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
const ItemLarge = (props) => {
  const {
    key,
    id_blog,
    category,
    date,
    id_category,
    doctor,
    id_doctor,
    content,
  } = props;
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  useEffect(() => {
    SetLoadingSkeleton(true);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 2000);
  }, []);
  const navigate = useNavigate();
  return (
    <li className="NewsItem col-2" key={key}>
      {loadingSkeleton ? (
        <div className="NewsImage">
          <Skeleton width="490px" height="275px"></Skeleton>
        </div>
      ) : (
        <div className="NewsImage">
          <Link to={`/blog/${id_blog}`} className="clear">
            <img src={blogImg} alt="Blog Img"></img>
          </Link>
        </div>
      )}

      {loadingSkeleton ? (
        <div className="NewsCategory">
          <Skeleton count={1} width="490px"></Skeleton>
        </div>
      ) : (
        <div className="NewsCategory">
          <Link
            to={`/category/${id_category}/${category}`}
            className="clear bold"
            style={{ color: "red" }}
          >
            {category}
          </Link>
        </div>
      )}
      {loadingSkeleton ? (
        <div className="NewsTitle">
          <Skeleton count={1} width="490px"></Skeleton>
        </div>
      ) : (
        <div className="NewsTitle"></div>
      )}
      {loadingSkeleton ? (
        <div className="NewsContent">
          <Skeleton count={4} width="490px"></Skeleton>
        </div>
      ) : (
        <div
          onClick={() => {
            navigate(`/blog/${id_blog}`);
          }}
          className="NewsContent"
          role="button"
        >
          <span dangerouslySetInnerHTML={{ __html: content }}></span>
        </div>
      )}
      {loadingSkeleton ? (
        <div className="NewsAuthorAndTime" style={{ marginTop: "-50px" }}>
          <Skeleton count={1} width="490px" height="10px"></Skeleton>
        </div>
      ) : (
        <div className="NewsAuthorAndTime">
          <Link to={`/care/doctor/${id_doctor}`} className="clear">
            <img src={avtImg} placeholder="Avatar" alt=""></img>
            <span>
              Được viết bởi <b>{doctor}</b> - {date}
            </span>
          </Link>
        </div>
      )}
    </li>
  );
};
export default ItemLarge;
