import React from "react";

import "./NewsLarge.scss";
import blogImg from "../../../assets/blog-img.png";
import avtImg from "../../../assets/avatar.png";

class NewsLarge extends React.Component {
  render() {
    return (
      <div className="NewsLargeContainer">
        <div className="NewsLargeOptionsContainer">
          <div className="bold">Sắp xếp theo</div>
          <div className="NewsLargeOption bold selected">Phổ biến nhất</div>
          <div className="NewsLargeOption bold">Mới nhất</div>
          <div className="NewsLargeLink flex-center">
            <a href="#" className="clear bold">
              <p>Xem thêm {">"}</p>
            </a>
          </div>
        </div>
        <div className="NewsLarge2ItemsContainer">
          <ul className="clear NewsLarge2Items flex-center">
            <li className="NewsItem col-2">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsCategory">
                <a href="#" className="clear bold" style={{ color: "red" }}>
                  Chuyên mục
                </a>
              </div>
              <div className="NewsTitle">
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              </div>
              <div className="NewsContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            </li>
            <li className="NewsItem col-2">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsCategory">
                <a href="#" className="clear bold" style={{ color: "blue" }}>
                  Chuyên mục
                </a>
              </div>
              <div className="NewsTitle">
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              </div>
              <div className="NewsContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            </li>
          </ul>
        </div>
        <div className="NewsLarge3ItemsContainer">
          <ul className="clear NewsLarge3Items flex-center">
            <li className="NewsItem col-3">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsCategory">
                <a href="#" className="clear bold" style={{ color: "green" }}>
                  Chuyên mục
                </a>
              </div>
              <div className="NewsTitle">
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              </div>
              <div className="NewsAuthorAndTime italic">
                <a href="#" className="clear">
                  <img src={avtImg} placeholder="Avatar"></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </a>
              </div>
            </li>
            <li className="NewsItem col-3">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsCategory">
                <a href="#" className="clear bold" style={{ color: "cyan" }}>
                  Chuyên mục
                </a>
              </div>
              <div className="NewsTitle">
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              </div>
              <div className="NewsAuthorAndTime italic">
                <a href="#" className="clear">
                  <img src={avtImg} placeholder="Avatar"></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </a>
              </div>
            </li>
            <li className="NewsItem col-3">
              <div className="NewsImage">
                <a href="#" className="clear">
                  <img src={blogImg} alt="Blog Img"></img>
                </a>
              </div>
              <div className="NewsCategory">
                <a href="#" className="clear bold" style={{ color: "red" }}>
                  Chuyên mục
                </a>
              </div>
              <div className="NewsTitle">
                <a href="#" className="clear bold">
                  Tiêu đề bài viết
                </a>
              </div>
              <div className="NewsAuthorAndTime italic">
                <a href="#" className="clear">
                  <img src={avtImg} placeholder="Avatar"></img>
                  <span>
                    Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewsLarge;
