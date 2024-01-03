import React, { memo, useEffect, useState } from "react";
import "../HomePage/NewsSmall/NewsSmall.scss";
import blogImg from "assets/blog-img.png";
import avtImg from "assets/avatar.png";
import { Link } from "react-router-dom";
import { getCategoryById, searchBlogByIdCategory } from "service/UserService";
import ReactPaginate from "react-paginate";
const CategorySmall = (props) => {
  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);
  const [cout, setCount] = useState("");
  const pageTotal = cout / 6;
  const roundedNumber = Math.ceil(pageTotal);
  const { id } = props;
  const handlePageClick = (event) => {
    getBlog(+event.selected + 1);
  };
  const getBlog = async (page) => {
    let res = await searchBlogByIdCategory(id, page);
    if (res) {
      setBlog(res?.results);
      setCount(res?.count);
    }
  };
  const getCategory = async () => {
    let res = await getCategoryById(id);
    if (res) {
      setCategory(res);
    }
  };
  useEffect(() => {
    getBlog(1);
    getCategory();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="NewsSmallContainer">
      <div className="NewsSmallHeader">
        <div className="CategoryName bold">
          {category?.name || "Tên chuyên mục"}
        </div>
      </div>
      <div className="NewsSmallContent">
        <ul className="ListNewsSmallItems clear">
          {blog &&
            blog.length > 0 &&
            blog.map((item, index) => {
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
      <div className="DoctorResultPageMonitor search__page">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={roundedNumber}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous"
          previousLinkClassName="page-link"
          nextClassName="page-item previous"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active active-pagination"
        />
      </div>
    </div>
  );
};

export default memo(CategorySmall);
