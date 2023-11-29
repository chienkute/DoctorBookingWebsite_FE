import "../../user/SearchDoctor/SearchDoctor.scss";
import "../../user/HospitalPage/hospitalPage.scss";
import ReactPaginate from "react-paginate";
import "../../user/SearchDoctor/DoctorSearchResult.scss";
import "../../../style/page.scss";
import hospavt from "../../../assets/hospital.jpg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "../ServiceSearch/serviceSearch.scss";
import { useEffect, useState } from "react";
import { getServiceByIdHospital } from "service/UserService";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";
import Skeleton from "react-loading-skeleton";
const ServiceSearch = () => {
  const [service, setService] = useState([]);
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState("");
  const navigate = useNavigate();
  const queryDebounce = useDebounce(search, 500);
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getService = async () => {
      let res = await getServiceByIdHospital(queryDebounce, "");
      if (res) {
        setLoadingSkeleton(true);
        setService(res?.results);
        setSearchCount(res?.count);
        console.log(res);
      }
    };
    getService();
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 1500);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [queryDebounce]);
  return (
    <div className="serviceSearch">
      <div className="SearchDoctorPageContent serviceSearch__page">
        <div className="SearchDoctorResultContainer">
          <div className="SearchDoctorResultContent">
            <div className="care__banner_button">
              <div className="care__banner_input flex-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  id="care__ins"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  autoComplete="off"
                ></input>
              </div>
            </div>
            <div
              className="SearchDoctorResultLabel bold"
              style={{ marginTop: "30px" }}
            >
              {searchCount} kết quả được tìm thấy
            </div>
            {loading ? (
              <div>
                <div className="hospital__body_dichvu_result">
                  <div className="hospital__body_dichvu_info">
                    <Skeleton width={"30%"}></Skeleton>
                    <Skeleton
                      width={"30%"}
                      style={{ marginBottom: "25px" }}
                    ></Skeleton>
                  </div>
                  <div className="hospital__body_dichvu_bottom">
                    <div className="hospital__body_dichvu_bottom_avtHosp">
                      <Skeleton
                        circle
                        width={"40px"}
                        height={"40px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_descrip">
                      <Skeleton
                        count={2}
                        width={"400px"}
                        height={"10px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_button">
                      <Skeleton
                        width={"140px"}
                        height={"50px"}
                        style={{ transform: "translateY(-5px)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="hospital__body_dichvu_result">
                  <div className="hospital__body_dichvu_info">
                    <Skeleton width={"30%"}></Skeleton>
                    <Skeleton
                      width={"30%"}
                      style={{ marginBottom: "25px" }}
                    ></Skeleton>
                  </div>
                  <div className="hospital__body_dichvu_bottom">
                    <div className="hospital__body_dichvu_bottom_avtHosp">
                      <Skeleton
                        circle
                        width={"40px"}
                        height={"40px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_descrip">
                      <Skeleton
                        count={2}
                        width={"400px"}
                        height={"10px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_button">
                      <Skeleton
                        width={"140px"}
                        height={"50px"}
                        style={{ transform: "translateY(-5px)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="hospital__body_dichvu_result">
                  <div className="hospital__body_dichvu_info">
                    <Skeleton width={"30%"}></Skeleton>
                    <Skeleton
                      width={"30%"}
                      style={{ marginBottom: "25px" }}
                    ></Skeleton>
                  </div>
                  <div className="hospital__body_dichvu_bottom">
                    <div className="hospital__body_dichvu_bottom_avtHosp">
                      <Skeleton
                        circle
                        width={"40px"}
                        height={"40px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_descrip">
                      <Skeleton
                        count={2}
                        width={"400px"}
                        height={"10px"}
                      ></Skeleton>
                    </div>

                    <div className="hospital__body_dichvu_bottom_button">
                      <Skeleton
                        width={"140px"}
                        height={"50px"}
                        style={{ transform: "translateY(-5px)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {service &&
                  service.length > 0 &&
                  service.map((item, index) => {
                    return (
                      <div className="hospital__body_dichvu_result" key={index}>
                        <div className="hospital__body_dichvu_info">
                          {loadingSkeleton ? (
                            <Skeleton width={"30%"}></Skeleton>
                          ) : (
                            <Link to={`/care/service/${item.id}`}>
                              {item.name}
                            </Link>
                          )}
                          {loadingSkeleton ? (
                            <Skeleton
                              width={"30%"}
                              style={{ marginBottom: "25px" }}
                            ></Skeleton>
                          ) : (
                            <div className="hospital__body_dichvu_price">
                              <div className="hospital__body_dichvu_price_icon">
                                <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                              </div>
                              <p>800.000</p>
                            </div>
                          )}
                        </div>
                        <div className="hospital__body_dichvu_bottom">
                          {loadingSkeleton ? (
                            <div className="hospital__body_dichvu_bottom_avtHosp">
                              <Skeleton
                                circle
                                width={"40px"}
                                height={"40px"}
                              ></Skeleton>
                            </div>
                          ) : (
                            <div className="hospital__body_dichvu_bottom_avtHosp">
                              <img src={hospavt} alt="" />
                            </div>
                          )}

                          {loadingSkeleton ? (
                            <div className="hospital__body_dichvu_bottom_descrip">
                              <Skeleton
                                count={2}
                                width={"400px"}
                                height={"10px"}
                              ></Skeleton>
                            </div>
                          ) : (
                            <div className="hospital__body_dichvu_bottom_descrip">
                              <Link>Phòng Khám ACC - Chiropractic Đà Nẵng</Link>
                              <p>
                                112 Đường 2 Tháng 9, phường Bình Thuận, Hải
                                Châu, Đà Nẵng, Viet Nam
                              </p>
                            </div>
                          )}
                          {loadingSkeleton ? (
                            <div className="hospital__body_dichvu_bottom_button">
                              <Skeleton
                                width={"140px"}
                                height={"50px"}
                                style={{ transform: "translateY(-5px)" }}
                              />
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="btn button hospital__body_dichvu_bottom_button"
                              onClick={() => {
                                navigate(`/care/service/${item.id}`);
                              }}
                            >
                              Đặt Lịch Hẹn
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <div className="DoctorResultPageMonitor">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              // onPageChange={handlePageClick}
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
    </div>
  );
};

export default ServiceSearch;
