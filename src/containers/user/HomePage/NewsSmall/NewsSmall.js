import React, { memo, useEffect, useState } from "react";
import "./NewsSmall.scss";

import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import { Link } from "react-router-dom";
import { getBlogByIdCategory, getCategoryById } from "service/UserService";

const NewsSmall = (props) => {
  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = props;
  const getBlog = async () => {
    let res = await getBlogByIdCategory(id);
    if (res) {
      setBlog(res?.results);
    }
  };
  const getCategory = async () => {
    let res = await getCategoryById(id);
    if (res) {
      setCategory(res);
    }
  };
  useEffect(() => {
    getBlog();
    getCategory();
  }, []);
  return (
    <div className="NewsSmallContainer">
      <div className="NewsSmallHeader">
        <div className="CategoryName bold">
          {category?.name || "Tên chuyên mục"}
        </div>
        <div className="NewsSmallLink flex-center">
          <Link
            to={`/category/${category?.id}/${category?.name}`}
            className="clear bold"
          >
            <p>Xem thêm {">"}</p>
          </Link>
        </div>
      </div>
      <div className="NewsSmallContent">
        <ul className="ListNewsSmallItems clear">
          {blog &&
            blog.length > 0 &&
            blog.slice(0, 3).map((item, index) => {
              return (
                <li className="NewsItem" key={index}>
                  <div className="NewsImage1">
                    <Link to={`/blog/${item?.id}`} className="clear">
                      <img src={item?.picture || blogImg} alt="Blog Img"></img>
                    </Link>
                  </div>
                  <div className="NewsInfo">
                    <div className="NewsContent1">
                      <span
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      ></span>
                    </div>
                    <div className="NewsAuthorAndTime">
                      <Link
                        to={`/care/doctor/${item?.id_doctor?.id}`}
                        className="clear"
                      >
                        <img
                          src={item?.id_doctor?.account?.avatar || avtImg}
                          placeholder="Avatar"
                          alt=""
                        ></img>
                        <span>
                          Tác giả <b>{item?.id_doctor?.name}</b> -
                          {item?.created_at}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default memo(NewsSmall);
