import React, { useEffect, useState } from "react";

import "./NewsLarge.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import Skeleton from "react-loading-skeleton";
const NewsLarge = () => {
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 2000);
  }, []);
  return (
    <div className="NewsLargeContainer">
      <div className="NewsLargeOptionsContainer">
        <div className="bold">Sắp xếp theo</div>
        <div className="NewsLargeOption bold selected">Phổ biến nhất</div>
        <div className="NewsLargeOption bold">Mới nhất</div>
      </div>
      <div className="NewsLarge2ItemsContainer">
        <ul className="clear NewsLarge2Items flex-center">
          <li className="NewsItem col-2">
            <div className="NewsImage">
              {loadingSkeleton ? (
                <Skeleton width="460px" height="275px"></Skeleton>
              ) : (
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              )}
            </div>
            <div className="NewsCategory">
              {loadingSkeleton ? (
                <Skeleton count={1} width="95%"></Skeleton>
              ) : (
                <a href="#" className="clear bold" style={{ color: "red" }}>
                  Chuyên mục
                </a>
              )}
            </div>
            <div className="NewsTitle">
              {loadingSkeleton ? (
                <Skeleton count={1} width="95%"></Skeleton>
              ) : (
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              )}
            </div>
            <div className="NewsContent">
              {loadingSkeleton ? (
                <Skeleton count={4} width="95%"></Skeleton>
              ) : (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </span>
              )}
            </div>
            <div className="NewsAuthorAndTime">
              {loadingSkeleton ? (
                <Skeleton count={1} width="462px" height="10px"></Skeleton>
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
          <li className="NewsItem col-2">
            <div className="NewsImage">
              {loadingSkeleton ? (
                <Skeleton width="460px" height="275px"></Skeleton>
              ) : (
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              )}
            </div>
            <div className="NewsCategory">
              {loadingSkeleton ? (
                <Skeleton count={1} width="95%"></Skeleton>
              ) : (
                <a href="#" className="clear bold" style={{ color: "red" }}>
                  Chuyên mục
                </a>
              )}
            </div>
            <div className="NewsTitle">
              {loadingSkeleton ? (
                <Skeleton count={1} width="95%"></Skeleton>
              ) : (
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              )}
            </div>
            <div className="NewsContent">
              {loadingSkeleton ? (
                <Skeleton count={4} width="95%"></Skeleton>
              ) : (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </span>
              )}
            </div>
            <div className="NewsAuthorAndTime">
              {loadingSkeleton ? (
                <Skeleton count={1} width="462px" height="10px"></Skeleton>
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
        </ul>
      </div>
      <div className="NewsLarge3ItemsContainer">
        <ul className="clear NewsLarge3Items flex-center">
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
        </ul>
      </div>
    </div>
  );
};

export default NewsLarge;
