import { memo, useContext, useEffect, useState } from "react";
import "./Search.scss";
import { FaSistrix } from "react-icons/fa6";
import imagedoctor1 from "../../../assets/doctor/tat.jpg";
import blogImg from "../../../assets/blog-img.png";
import "../../../style/pages/_theme.scss";
import { SearchContext } from "context/SearchContext";
import ReactPaginate from "react-paginate";
import "../../../style/page.scss";
import { searchBlogByName } from "service/UserService";
import { useDebounce } from "@uidotdev/usehooks";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [searchBlog, setSearchBlog] = useState("");
  const [dataBlog, setDataBlog] = useState([]);
  const [count, setScount] = useState("");
  const debouncedSearchTerm = useDebounce(searchBlog, 500);
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handlePageClick = (event) => {
    // getUser(+event.selected + 1);
  };
  const searchNameBlog = async () => {
    let res = await searchBlogByName(debouncedSearchTerm);
    if (res) {
      SetLoadingSkeleton(true);
      setDataBlog(res?.results);
      setScount(res?.count);
    }
  };
  useEffect(() => {
    setSearchBlog(search);
    searchNameBlog();
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1500);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, []);
  useEffect(() => {
    searchNameBlog();
    setSearch(debouncedSearchTerm);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1000);
  }, [debouncedSearchTerm]);
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
              onChange={(e) => {
                setSearchBlog(e.target.value);
              }}
              defaultValue={searchBlog}
            ></input>
          </div>
        </div>
        <div className="search__info">
          <p className="search__result text-center">
            {count} kết quả được tìm thấy
          </p>
        </div>
        {show ? (
          <div className="search__list">
            <ul>
              <li role="button">
                <div className="d-flex justify-content-center align-items-start search__item">
                  <div className="search__image">
                    <Skeleton
                      width="200px"
                      height="150px"
                      style={{ transform: "translateY(-5px)" }}
                    />
                  </div>
                  <div className="search__summary d-flex flex-column">
                    <Link className="search__category">
                      <span>
                        <Skeleton width="50%" />
                      </span>
                    </Link>
                    <Skeleton count={1} width="80%" />
                    <p className="search__text">
                      <Skeleton count={2} />
                    </p>
                    <div className="search__author d-flex">
                      <div className="search__images">
                        <Skeleton
                          count={1}
                          circle
                          width="25px"
                          height="25px"
                          style={{ transform: "translateY(-5px)" }}
                        />
                      </div>
                      <p>
                        <Skeleton count={1} width="400px" height="10px" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search__bar"></div>
              </li>
              <li role="button">
                <div className="d-flex justify-content-center align-items-start search__item">
                  <div className="search__image">
                    <Skeleton
                      width="200px"
                      height="150px"
                      style={{ transform: "translateY(-5px)" }}
                    />
                  </div>
                  <div className="search__summary d-flex flex-column">
                    <Link className="search__category">
                      <span>
                        <Skeleton width="50%" />
                      </span>
                    </Link>
                    <Skeleton count={1} width="80%" />
                    <p className="search__text">
                      <Skeleton count={2} />
                    </p>
                    <div className="search__author d-flex">
                      <div className="search__images">
                        <Skeleton
                          count={1}
                          circle
                          width="25px"
                          height="25px"
                          style={{ transform: "translateY(-5px)" }}
                        />
                      </div>
                      <p>
                        <Skeleton count={1} width="400px" height="10px" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search__bar"></div>
              </li>
              <li role="button">
                <div className="d-flex justify-content-center align-items-start search__item">
                  <div className="search__image">
                    <Skeleton
                      width="200px"
                      height="150px"
                      style={{ transform: "translateY(-5px)" }}
                    />
                  </div>
                  <div className="search__summary d-flex flex-column">
                    <Link className="search__category">
                      <span>
                        <Skeleton width="50%" />
                      </span>
                    </Link>

                    <Skeleton count={1} width="80%" />

                    <p className="search__text">
                      <Skeleton count={2} />
                    </p>

                    <div className="search__author d-flex">
                      <div className="search__images">
                        <Skeleton
                          count={1}
                          circle
                          width="25px"
                          height="25px"
                          style={{ transform: "translateY(-5px)" }}
                        />
                      </div>

                      <p>
                        <Skeleton count={1} width="400px" height="10px" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search__bar"></div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="search__list">
            <ul>
              {dataBlog &&
                dataBlog.map((item, index) => {
                  return (
                    <li role="button">
                      <div className="d-flex justify-content-center align-items-start search__item">
                        <div className="search__image">
                          {loadingSkeleton ? (
                            <Skeleton
                              width="200px"
                              height="150px"
                              style={{ transform: "translateY(-5px)" }}
                            />
                          ) : (
                            <img src={blogImg} alt="" />
                          )}
                        </div>
                        <div className="search__summary d-flex flex-column">
                          <a
                            className="search__category"
                            onClick={() => {
                              navigate(`/category/${item.id_category}`);
                            }}
                          >
                            {loadingSkeleton ? (
                              <span>
                                {" "}
                                <Skeleton width="50%" />
                              </span>
                            ) : (
                              <span> Chuyên mục</span>
                            )}
                          </a>
                          {loadingSkeleton ? (
                            <Skeleton count={1} width="80%" />
                          ) : (
                            <a
                              className="search__titles"
                              onClick={() => {
                                navigate(`/blog/${item.id}`);
                              }}
                            >
                              {item.title}
                            </a>
                          )}
                          {loadingSkeleton ? (
                            <p className="search__text">
                              <Skeleton count={2} />
                            </p>
                          ) : (
                            <p
                              className="search__text"
                              onClick={() => {
                                navigate(`/blog/${item.id}`);
                              }}
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quae praesentium labore perferendis odit
                              veniam delectus veritatis deserunt accusamus
                              repudiandae ullam, excepturi modi similique nam
                              possimus corporis illum iure! Quibusdam, ullam.
                            </p>
                          )}

                          <div
                            className="search__author d-flex"
                            onClick={() => {
                              navigate(`/care/doctor/${item.id_doctor}`);
                            }}
                          >
                            {loadingSkeleton ? (
                              <div className="search__images">
                                <Skeleton
                                  count={1}
                                  circle
                                  width="25px"
                                  height="25px"
                                  style={{ transform: "translateY(-5px)" }}
                                />
                              </div>
                            ) : (
                              <div className="search__images">
                                <img src={imagedoctor1} alt="" />
                              </div>
                            )}
                            {loadingSkeleton ? (
                              <p>
                                <Skeleton
                                  count={1}
                                  width="400px"
                                  height="10px"
                                />
                              </p>
                            ) : (
                              <p>
                                Tham vấn y khoa {""}
                                <span>TS.Dược khoa Trương Anh Thư </span>
                                17/04/2023
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="search__bar"></div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

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
