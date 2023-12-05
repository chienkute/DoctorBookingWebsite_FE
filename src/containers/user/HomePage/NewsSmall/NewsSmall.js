import React, { memo } from "react";
import "./NewsSmall.scss";

import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import { Link } from "react-router-dom";

const NewsSmall = (props) => {
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
  return (
    <div className="NewsSmallContainer">
      <div className="NewsSmallHeader">
        <div className="CategoryName bold">Chuyên mục</div>
        <div className="NewsSmallLink flex-center">
          <Link className="clear bold">
            <p>Xem thêm {">"}</p>
          </Link>
        </div>
      </div>
      <div className="NewsSmallContent">
        <ul className="ListNewsSmallItems clear">
          <li className="NewsItem">
            <div className="NewsImage">
              <Link className="clear">
                <img src={blogImg} alt="Blog Img"></img>
              </Link>
            </div>
            <div className="NewsInfo">
              <div className="NewsTitle">
                <Link className="clear bold">Tiêu đề bài viết</Link>
              </div>
              <div className="NewsContent">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </span>
              </div>
              <div className="NewsAuthorAndTime">
                <Link className="clear">
                  <img src={avtImg} placeholder="Avatar" alt=""></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </Link>
              </div>
            </div>
          </li>
          <li className="NewsItem">
            <div className="NewsImage">
              <Link className="clear">
                <img src={blogImg} alt="Blog Img"></img>
              </Link>
            </div>
            <div className="NewsInfo">
              <div className="NewsTitle">
                <Link className="clear bold">Tiêu đề bài viết</Link>
              </div>
              <div className="NewsContent">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </span>
              </div>
              <div className="NewsAuthorAndTime">
                <Link className="clear">
                  <img src={avtImg} placeholder="Avatar" alt=""></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </Link>
              </div>
            </div>
          </li>
          <li className="NewsItem">
            <div className="NewsImage">
              <Link className="clear">
                <img src={blogImg} alt="Blog Img"></img>
              </Link>
            </div>
            <div className="NewsInfo">
              <div className="NewsTitle">
                <Link className="clear bold">Tiêu đề bài viết</Link>
              </div>
              <div className="NewsContent">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </span>
              </div>
              <div className="NewsAuthorAndTime">
                <Link className="clear">
                  <img src={avtImg} placeholder="Avatar" alt=""></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(NewsSmall);
