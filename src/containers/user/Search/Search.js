import { memo, useEffect, useState } from "react";
import "./Search.scss";
import { FaSistrix } from "react-icons/fa6";
import imagedoctor1 from "../../../assets/doctor/tat.jpg";
import blogImg from "../../../assets/blog-img.png";
import "../../../style/pages/_theme.scss";
import ReactPaginate from "react-paginate";
import "../../../style/page.scss";
import { searchBlogByName } from "service/UserService";
import { useDebounce } from "@uidotdev/usehooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Search = () => {
  const { name } = useParams();
  const [searchBlog, setSearchBlog] = useState(name);
  console.log(searchBlog);
  const [dataBlog, setDataBlog] = useState([]);
  const [count, setScount] = useState("");
  const debouncedSearchTerm = useDebounce(searchBlog, 500);
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const handlePageClick = (event) => {
    searchNameBlog(+event.selected + 1);
  };
  const searchNameBlog = async (page) => {
    let res = await searchBlogByName(debouncedSearchTerm, (page - 1) * 6);
    if (res) {
      console.log(res);
      SetLoadingSkeleton(true);
      setTimeout(() => {
        SetLoadingSkeleton(false);
      }, 1500);
      setTotalPage(res?.total_page);
      setDataBlog(res?.results);
      setScount(res?.count);
    }
  };
  useEffect(() => {
    searchNameBlog(1);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, []);
  useEffect(() => {
    searchNameBlog(1);
    setTimeout(() => {
      setShow(false);
    }, 1500);
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
              autoComplete="off"
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
                            <img src={item?.picture || blogImg} alt="" />
                          )}
                        </div>
                        <div className="search__summary d-flex flex-column">
                          <Link
                            className="search__category"
                            onClick={() => {
                              navigate(
                                `/category/${item?.id_category?.id}/${item?.id_category?.name}`,
                              );
                            }}
                          >
                            {loadingSkeleton ? (
                              <span>
                                <Skeleton width="50%" />
                              </span>
                            ) : (
                              <span>
                                {item?.id_category?.name || "Chuyên mục"}
                              </span>
                            )}
                          </Link>
                          {loadingSkeleton ? (
                            <Skeleton count={1} width="80%" />
                          ) : (
                            <Link
                              className="search__titles"
                              onClick={() => {
                                navigate(`/blog/${item?.id}`);
                              }}
                            >
                              {item?.title}
                            </Link>
                          )}
                          {loadingSkeleton ? (
                            <p className="search__text">
                              <Skeleton count={2} />
                            </p>
                          ) : (
                            <p
                              className="search__text"
                              onClick={() => {
                                navigate(`/blog/${item?.id}`);
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
                              navigate(`/care/doctor/${item?.id_doctor}`);
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
                                <img
                                  src={
                                    item?.id_doctor?.account?.avatar ||
                                    imagedoctor1
                                  }
                                  alt=""
                                />
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
                                <span>
                                  {item?.id_doctor?.name || "Tên bác sĩ"}
                                </span>
                                {item?.created_at}
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
            pageRangeDisplayed={3}
            pageCount={totalPage}
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
    </div>
  );
};
export default memo(Search);
