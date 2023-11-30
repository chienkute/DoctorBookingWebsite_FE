import React, { useEffect, useState } from "react";

import "./NewsLarge.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import Skeleton from "react-loading-skeleton";
const ItemSmall = () => {
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  useEffect(() => {
    SetLoadingSkeleton(true);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 2000);
  }, []);
  return (
    <li className="NewsItem col-3">
      <div className="NewsImage">
        {loadingSkeleton ? (
          <Skeleton width="300px" height="185px"></Skeleton>
        ) : (
          <a href="#" className="clear">
            <img src={blogImg} alt="Blog Img"></img>
          </a>
        )}
      </div>
      <div className="NewsCategory">
        {loadingSkeleton ? (
          <Skeleton count={1} width="94%"></Skeleton>
        ) : (
          <a href="#" className="clear bold" style={{ color: "green" }}>
            Chuyên mục
          </a>
        )}
      </div>
      <div className="NewsTitle">
        {loadingSkeleton ? (
          <Skeleton count={1} width="94%"></Skeleton>
        ) : (
          <a href="#" className="clear bold">
            Tiêu đề bài viết
          </a>
        )}
      </div>
      <div className="NewsAuthorAndTime">
        {loadingSkeleton ? (
          <Skeleton count={1} width="301px" height="15px"></Skeleton>
        ) : (
          <a href="#" className="clear">
            <img src={avtImg} placeholder="Avatar"></img>
            <span>
              Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
            </span>
          </a>
        )}
      </div>
    </li>
  );
};
export default ItemSmall;
