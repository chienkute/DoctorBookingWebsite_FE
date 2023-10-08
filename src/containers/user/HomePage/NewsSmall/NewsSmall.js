import React from "react";
import "./NewsSmall.scss";

import blogImg from "../../../assets/blog-img.png";
import avtImg from "../../../assets/avatar.png";

class NewsSmall extends React.Component {
  render() {
    return (
      <div className="NewsSmallContainer">
        <div className="NewsSmallHeader">
          <div className="CategoryName bold">Chuyên mục</div>
          <div className="NewsSmallLink flex-center">
            <a href="#" className="clear bold">
              <p>Xem thêm {">"}</p>
            </a>
          </div>
        </div>
        <div className="NewsSmallContent">
          <ul className="ListNewsSmallItems clear">
            <li className="NewsItem">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsInfo">
                <div className="NewsTitle">
                  <a href="#" className="clear bold">
                    Tiêu đề bài viết
                  </a>
                </div>
                <div className="NewsContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </div>
                <div className="NewsAuthorAndTime italic">
                  <a href="#" className="clear">
                    <img src={avtImg} placeholder="Avatar"></img>
                    <span>
                      Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="NewsItem">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsInfo">
                <div className="NewsTitle">
                  <a href="#" className="clear bold">
                    Tiêu đề bài viết
                  </a>
                </div>
                <div className="NewsContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </div>
                <div className="NewsAuthorAndTime italic">
                  <a href="#" className="clear">
                    <img src={avtImg} placeholder="Avatar"></img>
                    <span>
                      Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="NewsItem">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsInfo">
                <div className="NewsTitle">
                  <a href="#" className="clear bold">
                    Tiêu đề bài viết
                  </a>
                </div>
                <div className="NewsContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pulvinar pellentesque habitant morbi tristique senectus et.
                  Libero id faucibus nisl tincidunt eget nullam non nisi est...
                </div>
                <div className="NewsAuthorAndTime italic">
                  <a href="#" className="clear">
                    <img src={avtImg} placeholder="Avatar"></img>
                    <span>
                      Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewsSmall;
