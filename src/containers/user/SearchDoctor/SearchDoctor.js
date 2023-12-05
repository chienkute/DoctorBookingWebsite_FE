import "./SearchDoctor.scss";
import ReactPaginate from "react-paginate";
import { FaLocationDot } from "react-icons/fa6";
import "../../../style/page.scss";
import "../../user/SearchDoctor/DoctorSearchResult.scss";
import "../../user/SearchDoctor/HospitalSearchResult.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import avt from "../../../assets/avatar.png";
import {
  fetchAllService,
  fetchAllSpecialties,
  searchDoctor,
  searchHospital,
} from "service/UserService";
import { useDebounce } from "@uidotdev/usehooks";
import { MdLocationOn } from "react-icons/md";
import dakhoaImages from "../../../assets/chuyenkhoa/dakhoa.png";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { UpdateContext } from "context/UpdateContext";
function SearchDoctor() {
  const { id, chuyenkhoa } = useParams();
  const [adress, setAdress] = useState("");
  const [address, setAddress] = useState("");
  const [query, setQuery] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [specialtyy, setSpecialtyy] = useState("");
  const [specialties, setSpecialties] = useState(null);
  const [service, setService] = useState("");
  const [services, setServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");
  const [doctorCount, setDoctorCount] = useState(null);
  const [hospitalCount, setHospitalCount] = useState(null);
  const [count, setCount] = useState(doctorCount);
  const debouncedSearchTerm = useDebounce(query, 500);
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  const [show, setShow] = useState(true);
  const { update } = useContext(UpdateContext);
  const navigate = useNavigate();
  const getDoctor = async () => {
    let res = await searchDoctor(
      debouncedSearchTerm,
      adress,
      "",
      specialty,
      service,
    );
    if (res) {
      SetLoadingSkeleton(true);
      setDoctor(res?.results);
      setDoctorCount(res?.results?.total_doctors);
    }
  };
  const getHospital = async () => {
    let res = await searchHospital(
      debouncedSearchTerm,
      adress,
      specialty,
      service,
    );
    if (res) {
      SetLoadingSkeleton(true);
      setHospital(res?.results);
      setHospitalCount(res?.results?.total_doctors);
    }
  };
  useEffect(() => {
    getDoctor();
    getHospital();
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1000);
  }, [debouncedSearchTerm, adress, specialty, service]);
  useEffect(() => {
    if (chuyenkhoa) {
      setSpecialtyy(chuyenkhoa);
    } else {
      setSpecialtyy("");
    }
    if (id >= 0) {
      setSpecialty(id);
    } else {
      setSpecialty("");
    }
    const getAllSpecialty = async () => {
      let res = await fetchAllSpecialties();
      if (res) {
        setSpecialties(res?.results);
      }
    };
    getAllSpecialty();
    const getService = async () => {
      let res = await fetchAllService();
      if (res) {
        setServices(res?.results);
      }
    };
    getService();
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1500);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, []);
  useEffect(() => {
    getDoctor();
    getHospital();
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1500);
  }, [update]);
  const province = [
    { value: "Danang", label: "Đà Nẵng" },
    { value: "Hanoi", label: "Hà Nội" },
    { value: "HoChiMinh", label: "Hồ Chí Minh" },
  ];
  const handleClickSpeciaylty = (e) => {
    const Value = e.currentTarget.querySelector("p").innerText;
    setSpecialtyy(Value);
  };
  const handleClickService = (e) => {
    const Value = e.currentTarget.querySelector("p").innerText;
    setServiceValue(Value);
  };
  function SwapDoctor() {
    document.getElementById("DoctorType").classList.add("selection");
    document.getElementById("HospitalType").classList.remove("selection");
    document.getElementById("ListDoctorResult").style.display = "block";
    document.getElementById("ListHospitalResult").style.display = "none";
    document.getElementById("DoctorResultFilters").style.display = "block";
    setCount(doctorCount);
  }

  function SwapHospital() {
    document.getElementById("HospitalType").classList.add("selection");
    document.getElementById("DoctorType").classList.remove("selection");
    document.getElementById("ListHospitalResult").style.display = "block";
    document.getElementById("ListDoctorResult").style.display = "none";
    document.getElementById("DoctorResultFilters").style.display = "block";
    setCount(hospitalCount);
  }

  return (
    <div className="SearchResultPageContainer">
      <div clas sName="SearchResultPageContent">
        <div className="SearchInputRows">
          <div className="care__banner_button" style={{ width: "40%" }}>
            <div className="care__banner_icon">
              <FaLocationDot></FaLocationDot>
            </div>
            <div className="care__banner_input flex-center dropdown">
              <input
                type="text"
                placeholder="Vị trí hiện tại"
                id="care__in"
                data-mdb-toggle="dropdown"
                value={`${address}`}
                autoComplete="off"
              ></input>
              <ul
                class="dropdown-menu care__banner_menu"
                aria-labelledby="care_in"
              >
                <li>
                  <Link
                    class="dropdown-item care__banner_menu_title"
                    onClick={(e) => {
                      const pValue =
                        e.currentTarget.querySelector("p").innerText;
                      setAddress(pValue);
                      setAdress("");
                    }}
                  >
                    <div>
                      <FaLocationDot></FaLocationDot>
                    </div>
                    <p>Tất cả vị trí</p>
                  </Link>
                  <div className="care__banner_menu_title_line"></div>
                </li>
                {province.map((item, index) => (
                  <li key={index}>
                    <Link
                      class="dropdown-item care__banner_menu_title"
                      onClick={() => {
                        setAdress(item.value);
                        setAddress(item.label);
                      }}
                    >
                      <div>
                        <FaLocationDot></FaLocationDot>
                      </div>
                      <p>{item.label}</p>
                    </Link>
                    <div className="care__banner_menu_title_line"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="care__banner_button">
            <div className="care__banner_input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm theo tên bác sĩ, bệnh viện......"
                id="care__ins"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="SearchResultContainer">
            <div className="SearchResultLabel bold">
              <label>{count || "Những"} kết quả tìm được</label>
            </div>
            <div className="SearchResultHeader">
              <ul className="clear ResultTypes">
                <li
                  className="ResultType bold selection"
                  id="DoctorType"
                  onClick={SwapDoctor}
                >
                  <div className="ResultName">Bác sĩ</div>
                </li>
                <li
                  className="ResultType bold"
                  id="HospitalType"
                  onClick={SwapHospital}
                >
                  <div className="ResultName">Bệnh viện</div>
                </li>
              </ul>
            </div>
            <div className="SearchResultContent">
              {show ? (
                <ul className="clear ListDoctorResult" id="ListDoctorResult">
                  <li className="DoctorResult">
                    <div className="DoctorSearchResultContainer">
                      <Link className="DoctorHeader flex-center">
                        <div className="DoctorAvatar">
                          <Skeleton
                            height="75px"
                            width="75px"
                            circle
                            style={{ transform: "translateY(-10px)" }}
                          />
                        </div>
                        <div className="DoctorInfo">
                          <div className="DoctorName bold">
                            <Skeleton
                              count={1}
                              width="70%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="DoctorSpeicalist">
                            <Skeleton
                              count={1}
                              width="50%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="TagContainer">
                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <a href="/care/hospital" className="DoctorFooter">
                        <div className="DoctorOfficeAvatar">
                          <Skeleton circle width="45px" height="45px" />
                        </div>

                        <div className="DoctorOffice">
                          <div className="DoctorOfficeName">
                            <Skeleton width="400px" />
                          </div>

                          <div className="DoctorOfficeAddress">
                            <Skeleton />
                          </div>
                        </div>
                        <div className="BookDoctor">
                          <Skeleton width={"130px"} height={"50px"} />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="DoctorResult">
                    <div className="DoctorSearchResultContainer">
                      <Link className="DoctorHeader flex-center">
                        <div className="DoctorAvatar">
                          <Skeleton
                            height="75px"
                            width="75px"
                            circle
                            style={{ transform: "translateY(-10px)" }}
                          />
                        </div>
                        <div className="DoctorInfo">
                          <div className="DoctorName bold">
                            <Skeleton
                              count={1}
                              width="70%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="DoctorSpeicalist">
                            <Skeleton
                              count={1}
                              width="50%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="TagContainer">
                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <a href="/care/hospital" className="DoctorFooter">
                        <div className="DoctorOfficeAvatar">
                          <Skeleton circle width="45px" height="45px" />
                        </div>

                        <div className="DoctorOffice">
                          <div className="DoctorOfficeName">
                            <Skeleton width="400px" />
                          </div>

                          <div className="DoctorOfficeAddress">
                            <Skeleton />
                          </div>
                        </div>
                        <div className="BookDoctor">
                          <Skeleton width={"130px"} height={"50px"} />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="DoctorResult">
                    <div className="DoctorSearchResultContainer">
                      <Link className="DoctorHeader flex-center">
                        <div className="DoctorAvatar">
                          <Skeleton
                            height="75px"
                            width="75px"
                            circle
                            style={{ transform: "translateY(-10px)" }}
                          />
                        </div>
                        <div className="DoctorInfo">
                          <div className="DoctorName bold">
                            <Skeleton
                              count={1}
                              width="70%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="DoctorSpeicalist">
                            <Skeleton
                              count={1}
                              width="50%"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>

                          <div className="TagContainer">
                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />

                            <Skeleton
                              count={1}
                              width="80px"
                              style={{ marginLeft: "10px" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <a href="/care/hospital" className="DoctorFooter">
                        <div className="DoctorOfficeAvatar">
                          <Skeleton circle width="45px" height="45px" />
                        </div>
                        <div className="DoctorOffice">
                          <div className="DoctorOfficeName">
                            <Skeleton width="400px" />
                          </div>
                          <div className="DoctorOfficeAddress">
                            <Skeleton />
                          </div>
                        </div>
                        <div className="BookDoctor">
                          <Skeleton width={"130px"} height={"50px"} />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="clear ListDoctorResult" id="ListDoctorResult">
                  <li className="DoctorResult">
                    {doctor &&
                      doctor.length > 0 &&
                      doctor.map((item, index) => {
                        return (
                          <div className="DoctorSearchResultContainer">
                            <Link
                              className="DoctorHeader flex-center"
                              to={`/care/doctor/${item.id}`}
                              key={index}
                            >
                              <div className="DoctorAvatar">
                                {loadingSkeleton ? (
                                  <Skeleton
                                    height="75px"
                                    width="75px"
                                    circle
                                    style={{ transform: "translateY(-10px)" }}
                                  />
                                ) : (
                                  <img
                                    src={item?.account?.avatar || avt}
                                    alt="Avatar"
                                    style={{ borderRadius: "50%" }}
                                  ></img>
                                )}
                              </div>
                              <div className="DoctorInfo">
                                {loadingSkeleton ? (
                                  <div className="DoctorName bold">
                                    <Skeleton
                                      count={1}
                                      width="70%"
                                      style={{ marginLeft: "10px" }}
                                    />
                                  </div>
                                ) : (
                                  <div className="DoctorName bold">
                                    {item.name || "Tên bác sĩ"}
                                  </div>
                                )}
                                {loadingSkeleton ? (
                                  <div className="DoctorSpeicalist">
                                    <Skeleton
                                      count={1}
                                      width="50%"
                                      style={{ marginLeft: "10px" }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="DoctorSpeicalist d-flex"
                                    style={{ columnGap: "10px" }}
                                  >
                                    {item?.specialties?.map((item, index) => {
                                      return (
                                        <p>{item?.specialty?.name || "----"}</p>
                                      );
                                    })}
                                  </div>
                                )}
                                <div className="TagContainer">
                                  {loadingSkeleton ? (
                                    <Skeleton
                                      count={1}
                                      width="80px"
                                      style={{ marginLeft: "10px" }}
                                    />
                                  ) : (
                                    <div className="DirectTag">
                                      Tư vấn trực tiếp
                                    </div>
                                  )}
                                  {loadingSkeleton ? (
                                    <Skeleton
                                      count={1}
                                      width="80px"
                                      style={{ marginLeft: "10px" }}
                                    />
                                  ) : (
                                    <div className="ChildrenTag">
                                      Dành cho trẻ em
                                    </div>
                                  )}

                                  {loadingSkeleton ? (
                                    <Skeleton
                                      count={1}
                                      width="80px"
                                      style={{ marginLeft: "10px" }}
                                    />
                                  ) : (
                                    <div className="AdultTag">
                                      Dành cho người lớn
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                            <Link
                              to={`/care/hospital/${item?.hospital?.id}/${item?.hospital?.name}`}
                              className="DoctorFooter"
                            >
                              <div className="DoctorOfficeAvatar">
                                {loadingSkeleton ? (
                                  <Skeleton circle width="45px" height="45px" />
                                ) : (
                                  <div className="DoctorOfficeAvatar">
                                    <img
                                      src={
                                        item?.hospital?.account?.avatar || avt
                                      }
                                      alt="avt img"
                                      style={{ borderRadius: "50%" }}
                                    ></img>
                                  </div>
                                )}
                              </div>

                              <div className="DoctorOffice">
                                {loadingSkeleton ? (
                                  <div className="DoctorOfficeName">
                                    <Skeleton width="400px" />
                                  </div>
                                ) : (
                                  <div className="DoctorOfficeName">
                                    {item?.hospital?.name || "Tên bệnh viện"}
                                  </div>
                                )}

                                {loadingSkeleton ? (
                                  <div className="DoctorOfficeAddress">
                                    <Skeleton />
                                  </div>
                                ) : (
                                  <div className="DoctorOfficeAddress">
                                    {item?.hospital?.address || "Địa chỉ"}
                                  </div>
                                )}
                              </div>
                              {loadingSkeleton ? (
                                <div className="BookDoctor">
                                  <Skeleton width={"130px"} height={"50px"} />
                                </div>
                              ) : (
                                <div className="BookDoctor">
                                  <button
                                    className="BookDoctorButton bold"
                                    onClick={() => {
                                      navigate(`/care/doctor/${item?.id}`);
                                    }}
                                  >
                                    Đặt lịch hẹn
                                  </button>
                                </div>
                              )}
                            </Link>
                          </div>
                        );
                      })}
                  </li>
                </ul>
              )}
              <ul
                className="clear ListHospitalResult disabled"
                id="ListHospitalResult"
              >
                {hospital &&
                  hospital.length > 0 &&
                  hospital.map((item, index) => {
                    return (
                      <li
                        className="HospitalResult"
                        role="button"
                        onClick={() => {
                          navigate(`/care/hospital/${item.id}/${item.name}`);
                        }}
                      >
                        <div className="HospitalSearchResultContainer">
                          <div className="HospitalSearchResultContent">
                            <div className="HospitalAvatar">
                              {loadingSkeleton ? (
                                <Skeleton height="64px" width="64px" circle />
                              ) : (
                                <img
                                  src={item?.account?.avatar || avt}
                                  alt="Avatar"
                                  style={{ borderRadius: "50%" }}
                                ></img>
                              )}
                            </div>
                            <div className="HospitalInfo">
                              {loadingSkeleton ? (
                                <div className="HospitalName">
                                  <Skeleton width="50%" />
                                </div>
                              ) : (
                                <div className="HospitalName">
                                  {item?.name || "Tên bác sĩ"}
                                </div>
                              )}

                              {loadingSkeleton ? (
                                <div className="HospitalAddress">
                                  <Skeleton
                                    width="200px"
                                    style={{ marginBottom: "15px" }}
                                  />
                                </div>
                              ) : (
                                <div className="HospitalAddress">
                                  <span className="AddressIcon">
                                    <MdLocationOn></MdLocationOn>
                                  </span>
                                  <p>
                                    {item?.address || "Địa chỉ bệnh viện  ...."}
                                  </p>
                                </div>
                              )}

                              {loadingSkeleton ? (
                                <div className="HospitalDescriptionContent">
                                  <Skeleton count={2} width="500px" />
                                </div>
                              ) : (
                                <div className="HospitalDescriptionContent">
                                  {item?.info ||
                                    "Thông tin sơ lược về bệnh viện"}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="HospitalSearchResultFooter">
                            <button
                              className="HospitalViewButton bold"
                              onClick={() => {
                                navigate(
                                  `/care/hospital/${item?.id}/${item?.name}`,
                                );
                              }}
                            >
                              Xem bệnh viện
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
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
                  activeClassName="active active-pagination"
                />
              </div>
            </div>
          </div>
          <div className="ResultFilter">
            <div className="DoctorResultFilters" id="DoctorResultFilters">
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Chuyên khoa</header>
                </div>
                {/* <div className="DoctorResultFilterContent">
                  <label>
                    <input
                      type="radio"
                      name="AvailableAppointment"
                      value="any"
                    ></input>
                    Ngày bất kì
                  </label>
                  <label htmlFor="AA_today">
                    <input
                      type="radio"
                      id="AA_today"
                      name="AvailableAppointment"
                      value="today"
                    ></input>
                    Hôm nay
                  </label>
                  <label htmlFor="AA_tomorrow">
                    <input
                      type="radio"
                      id="AA_tomorrow"
                      name="AvailableAppointment"
                      value="tomorrow"
                    ></input>
                    Ngày mai
                  </label>

                  <label htmlFor="AA_7days">
                    <input
                      type="radio"
                      id="AA_7days"
                      name="AvailableAppointment"
                      value="7days"
                    ></input>
                    7 ngày kế tiếp
                  </label>
                  <label htmlFor="AA_weekends">
                    <input
                      type="radio"
                      id="AA_weekends"
                      name="AvailableAppointment"
                      value="weekends"
                    ></input>
                    Cuối tuần
                  </label>
                </div> */}
                <div className="care__banner_button" style={{ width: "100%" }}>
                  <div className="care__banner_input flex-center dropdown">
                    <input
                      type="text"
                      placeholder="Tìm kiếm theo chuyên khoa"
                      id="care__in"
                      data-mdb-toggle="dropdown"
                      value={`${specialtyy}`}
                      autoComplete="off"
                    ></input>
                    <ul
                      class="dropdown-menu care__banner_menu search_menu"
                      aria-labelledby="care_in"
                    >
                      <li>
                        <Link
                          class="dropdown-item care__banner_menu_title"
                          onClick={(e) => {
                            const pValue =
                              e.currentTarget.querySelector("p").innerText;
                            setSpecialtyy(pValue);
                            setSpecialty("");
                          }}
                        >
                          <div className="img_chuyenkhoa">
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p style={{ fontSize: "14px" }}>Tất cả chuyên khoa</p>
                        </Link>
                        <div className="care__banner_menu_title_line"></div>
                      </li>
                      {specialties &&
                        specialties.map((item, index) => (
                          <li key={index}>
                            <Link
                              class="dropdown-item care__banner_menu_title"
                              onClick={(e) => {
                                handleClickSpeciaylty(e);
                                setSpecialty(item.id);
                              }}
                            >
                              <div className="img_chuyenkhoa">
                                <img src={item?.icon || dakhoaImages} alt="" />
                              </div>
                              <p style={{ fontSize: "14px" }}>{item?.name}</p>
                            </Link>
                            <div className="care__banner_menu_title_line"></div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Dịch vụ</header>
                </div>
                <div className="care__banner_button" style={{ width: "100%" }}>
                  <div className="care__banner_input flex-center dropdown">
                    <input
                      type="text"
                      placeholder="Tìm kiếm theo dịch vụ"
                      id="care__in"
                      data-mdb-toggle="dropdown"
                      value={`${serviceValue}`}
                      autoComplete="off"
                    ></input>
                    <ul
                      class="dropdown-menu care__banner_menu search_menu"
                      aria-labelledby="care_in"
                    >
                      <li>
                        <Link
                          class="dropdown-item care__banner_menu_title"
                          onClick={(e) => {
                            const pValue =
                              e.currentTarget.querySelector("p").innerText;
                            setServiceValue(pValue);
                            setService("");
                          }}
                        >
                          <div className="img_chuyenkhoa">
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p style={{ fontSize: "14px" }}>Tất cả dịch vụ</p>
                        </Link>
                        <div className="care__banner_menu_title_line"></div>
                      </li>
                      {services &&
                        services.map((item, index) => (
                          <li key={index}>
                            <Link
                              class="dropdown-item care__banner_menu_title"
                              onClick={(e) => {
                                handleClickService(e);
                                setService(item.id);
                              }}
                            >
                              <div className="img_chuyenkhoa">
                                <img src={item?.icon || dakhoaImages} alt="" />
                              </div>
                              <p style={{ fontSize: "14px" }}>{item.name}</p>
                            </Link>
                            <div className="care__banner_menu_title_line"></div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Loại hình khám</header>
                </div>
                <div className="DoctorResultFilterContent">
                  <label htmlFor="T_away">
                    <input
                      type="checkbox"
                      id="T_away"
                      name="Type"
                      value="away"
                    ></input>
                    Tư vấn từ xa
                  </label>
                  <label htmlFor="T_direct">
                    <input
                      type="checkbox"
                      id="T_direct"
                      name="Type"
                      value="direct"
                    ></input>
                    Tư vấn trực tiếp
                  </label>
                </div>
              </div> */}
              {/* <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Cung cấp dịch vụ chăm sóc</header>
                </div>
                <div className="DoctorResultFilterContent">
                  <label htmlFor="HT_adult">
                    <input
                      type="checkbox"
                      id="HT_adult"
                      name="HumanType"
                      value="adult"
                    ></input>
                    Người lớn
                  </label>
                  <label htmlFor="HT_children">
                    <input
                      type="checkbox"
                      id="HT_children"
                      name="HumanType"
                      value="children"
                    ></input>
                    Trẻ em
                  </label>
                </div>
              </div>
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Giới tính</header>
                </div>
                <div className="DoctorResultFilterContent">
                  <label htmlFor="S_male">
                    <input
                      type="checkbox"
                      id="S_male"
                      name="Sex"
                      value="male"
                    ></input>
                    Nam
                  </label>
                  <label htmlFor="S_female">
                    <input
                      type="checkbox"
                      id="S_female"
                      name="Sex"
                      value="female"
                    ></input>
                    Nữ
                  </label>
                </div>
              </div>
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Phí tham vấn theo giờ</header>
                </div>
                <div className="DoctorResultFilterContent PriceFilter flex-center">
                  <div>Từ</div>
                  <div className="InputMinPrice flex-center">
                    <span>đ </span>
                    <input
                      type="number"
                      name="MinPrice"
                      id="MinPriceField"
                    ></input>
                  </div>
                  <div>đến</div>
                  <div className="InputMaxPrice flex-center">
                    <span>đ </span>
                    <input
                      type="number"
                      name="MaxPrice"
                      id="MaxPriceField"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="DoctorFilterReset">
                <button className="ResetButton flex-center">
                  <span>
                    <FaTrashCan />
                  </span>
                  <span>Xoá tất cả</span>
                </button>
              </div> */}
            </div>
            {/* <div className="HospitalResultFilters" id="HospitalResultFilters">
              <div className="HospitalResultFilter">
                <div className="HospitalResultFilterHeader">
                  <header>Có thể nhận lịch hẹn</header>
                </div>
                <div className="HospitalResultFilterContent">
                  <label htmlFor="ST_service">
                    <input
                      type="radio"
                      name="ServiceType"
                      id="ST_service"
                      value="ST_service"
                    ></input>
                    Dịch vụ
                  </label>
                  <label htmlFor="ST_doctor">
                    <input
                      type="radio"
                      name="ServiceType"
                      id="ST_doctor"
                      value="ST_doctor"
                    ></input>
                    Bác sĩ
                  </label>
                </div>
              </div>
              <div className="HospitalResultReset">
                <button className="ResetButton flex-center">
                  <span>
                    <FaTrashCan />
                  </span>
                  <span>Xoá tất cả</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDoctor;
