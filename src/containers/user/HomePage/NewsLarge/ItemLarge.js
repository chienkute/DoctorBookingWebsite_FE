import React, { useEffect, useState } from "react";

import "./NewsLarge.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const ItemLarge = () => {
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  useEffect(() => {
    SetLoadingSkeleton(true);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 2000);
  }, []);
  return (
    <li className="NewsItem col-2">
      {loadingSkeleton ? (
        <div className="NewsImage">
          <Skeleton width="490px" height="275px"></Skeleton>
        </div>
      ) : (
        <div className="NewsImage">
          <Link className="clear">
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
          <a href="#" className="clear bold" style={{ color: "red" }}>
            Chuyên mục
          </a>
        </div>
      )}
      {loadingSkeleton ? (
        <div className="NewsTitle">
          <Skeleton count={1} width="490px"></Skeleton>
        </div>
      ) : (
        <div className="NewsTitle">
          <a href="#" className="clear bold">
            Tiêu đề bài viết
          </a>
        </div>
      )}
      {loadingSkeleton ? (
        <div className="NewsContent">
          <Skeleton count={4} width="490px"></Skeleton>
        </div>
      ) : (
        <div className="NewsContent">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            pellentesque habitant morbi tristique senectus et. Libero id
            faucibus nisl tincidunt eget nullam non nisi est...
          </span>
        </div>
      )}
      {loadingSkeleton ? (
        <div className="NewsAuthorAndTime" style={{ marginTop: "-50px" }}>
          <Skeleton count={1} width="490px" height="10px"></Skeleton>
        </div>
      ) : (
        <div className="NewsAuthorAndTime">
          <a href="#" className="clear">
            <img src={avtImg} placeholder="Avatar"></img>
            <span>
              Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
            </span>
          </a>
        </div>
      )}
    </li>
  );
};
export default ItemLarge;
