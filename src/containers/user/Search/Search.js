import { memo, useContext } from "react";
import "./Search.scss";
import { FaSistrix } from "react-icons/fa6";
import { FcPrevious, FcNext } from "react-icons/fc";
import imagedoctor1 from "../../../assets/doctor/tat.jpg";
import blogImg from "../../../assets/blog-img.png";
import "../../../style/pages/_theme.scss";
import { SearchContext } from "context/SearchContext";
import ReactPaginate from "react-paginate";
import "../../../style/page.scss";
const Search = () => {
  const { search } = useContext(SearchContext);
  const handlePageClick = (event) => {
    getUser(+event.selected + 1);
  };
  const getUser = async (page) => {
    // let res = await fetchAllUser(page);
    // if (res && res.data) {
    //   setTotal(res.total);
    //   setList(res.data);
    //   setTotalPage(res.total_pages);
  };
  return (
    <div className="searchr">
      <div className="search__container">
        <div className="search__button">
          <div className="search__icon flex-center">
            <FaSistrix />
          </div>
          <div className="search__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              id="search__in"
            ></input>
          </div>
        </div>
        <div className="search__info">
          <h3 className="search__title text-center">{search}</h3>
          <p className="search__result text-center">
            3934 kết quả được tìm thấy
          </p>
        </div>
        <div className="search__list">
          <ul>
            <li>
              <div className="d-flex justify-content-center align-items-start search__item">
                <div className="search__image">
                  <img src={blogImg} alt="" />
                </div>
                <div className="search__summary d-flex flex-column">
                  <a className="search__category" href="">
                    <span>ĐỘT QUỴ VÀ PHÌNH MẠCH NÃO</span>
                  </a>
                  <a className="search__titles" href="">
                    Nhận biết các dấu hiệu của đột quỵ nhẹ (đột quỵ nhỏ)
                  </a>
                  <p className="search__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae praesentium labore perferendis odit veniam delectus
                    veritatis deserunt accusamus repudiandae ullam, excepturi
                    modi similique nam possimus corporis illum iure! Quibusdam,
                    ullam.
                  </p>
                  <div className="search__author d-flex">
                    <div className="search__images">
                      <img src={imagedoctor1} alt="" />
                    </div>
                    <p>
                      Tham vấn y khoa <span>TS.Dược khoa Trương Anh Thư </span>
                      17/04/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="search__bar"></div>
            </li>
            <li>
              <div className="d-flex justify-content-center align-items-start search__item">
                <div className="search__image">
                  <img src={blogImg} alt="" />
                </div>
                <div className="search__summary d-flex flex-column">
                  <a className="search__category" href="">
                    <span>ĐỘT QUỴ VÀ PHÌNH MẠCH NÃO</span>
                  </a>
                  <a className="search__titles" href="">
                    Nhận biết các dấu hiệu của đột quỵ nhẹ (đột quỵ nhỏ)
                  </a>
                  <p className="search__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae praesentium labore perferendis odit veniam delectus
                    veritatis deserunt accusamus repudiandae ullam, excepturi
                    modi similique nam possimus corporis illum iure! Quibusdam,
                    ullam.
                  </p>
                  <div className="search__author d-flex">
                    <div className="search__images">
                      <img src={imagedoctor1} alt="" />
                    </div>
                    <p>
                      Tham vấn y khoa <span>TS.Dược khoa Trương Anh Thư </span>
                      17/04/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="search__bar"></div>
            </li>
            <li>
              <div className="d-flex justify-content-center align-items-start search__item">
                <div className="search__image">
                  <img src={blogImg} alt="" />
                </div>
                <div className="search__summary d-flex flex-column">
                  <a className="search__category" href="">
                    <span>ĐỘT QUỴ VÀ PHÌNH MẠCH NÃO</span>
                  </a>
                  <a className="search__titles" href="">
                    Nhận biết các dấu hiệu của đột quỵ nhẹ (đột quỵ nhỏ)
                  </a>
                  <p className="search__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae praesentium labore perferendis odit veniam delectus
                    veritatis deserunt accusamus repudiandae ullam, excepturi
                    modi similique nam possimus corporis illum iure! Quibusdam,
                    ullam.
                  </p>
                  <div className="search__author d-flex">
                    <div className="search__images">
                      <img src={imagedoctor1} alt="" />
                    </div>
                    <p>
                      Tham vấn y khoa <span>TS.Dược khoa Trương Anh Thư </span>
                      17/04/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="search__bar"></div>
            </li>
            <li>
              <div className="d-flex justify-content-center align-items-start search__item">
                <div className="search__image">
                  <img src={blogImg} alt="" />
                </div>
                <div className="search__summary d-flex flex-column">
                  <a className="search__category" href="">
                    <span>ĐỘT QUỴ VÀ PHÌNH MẠCH NÃO</span>
                  </a>
                  <a className="search__titles" href="">
                    Nhận biết các dấu hiệu của đột quỵ nhẹ (đột quỵ nhỏ)
                  </a>
                  <p className="search__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae praesentium labore perferendis odit veniam delectus
                    veritatis deserunt accusamus repudiandae ullam, excepturi
                    modi similique nam possimus corporis illum iure! Quibusdam,
                    ullam.
                  </p>
                  <div className="search__author d-flex">
                    <div className="search__images">
                      <img src={imagedoctor1} alt="" />
                    </div>
                    <p>
                      Tham vấn y khoa <span>TS.Dược khoa Trương Anh Thư </span>
                      17/04/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="search__bar"></div>
            </li>
          </ul>
        </div>
        <div className="DoctorResultPageMonitor search__page">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={3}
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
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};
export default memo(Search);
