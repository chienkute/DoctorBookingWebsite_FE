import "./SearchDoctor.scss";
import ReactPaginate from "react-paginate";
import { FaLocationDot, FaTrashCan } from "react-icons/fa6";
import "../../../style/page.scss";
import "../../theme/DoctorSearchResult/DoctorSearchResult.scss";
import { FcPrevious, FcNext } from "react-icons/fc";
import DoctorSearchResult from "containers/theme/DoctorSearchResult/DoctorSearchResult";
import HospitalSearchResult from "containers/theme/HospitalSearchResult/HospitalSearchResult";
import { useState } from "react";

function SearchDoctor() {
  const [adress, setAdress] = useState("");
  const [query, setQuery] = useState(null);
  const provinces = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hòa",
  ];
  const handleClickAdress = (e) => {
    const pValue = e.currentTarget.querySelector("p").innerText;
    setAdress(pValue);
  };
  function SwapDoctor() {
    document.getElementById("DoctorType").classList.add("selection");
    document.getElementById("HospitalType").classList.remove("selection");
    document.getElementById("ListDoctorResult").style.display = "block";
    document.getElementById("ListHospitalResult").style.display = "none";
    document.getElementById("DoctorResultFilters").style.display = "block";
    document.getElementById("HospitalResultFilters").style.display = "none";
  }

  function SwapHospital() {
    document.getElementById("HospitalType").classList.add("selection");
    document.getElementById("DoctorType").classList.remove("selection");
    document.getElementById("ListHospitalResult").style.display = "block";
    document.getElementById("ListDoctorResult").style.display = "none";
    document.getElementById("HospitalResultFilters").style.display = "block";
    document.getElementById("DoctorResultFilters").style.display = "none";
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
                aria-expanded="true"
                value={`${adress}`}
              ></input>
              <ul
                class="dropdown-menu care__banner_menu"
                aria-labelledby="care_in"
              >
                {provinces.map((province, index) => (
                  <li key={index}>
                    <a
                      class="dropdown-item care__banner_menu_title"
                      onClick={handleClickAdress}
                    >
                      <div>
                        <FaLocationDot></FaLocationDot>
                      </div>
                      <p>{province}</p>
                    </a>
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
                placeholder="Tìm kiếm theo chuyên khoa, dịch vụ, bệnh viện, bác sĩ ....."
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
              <label>86 kết quả tìm được</label>
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
              <ul className="clear ListDoctorResult" id="ListDoctorResult">
                <li className="DoctorResult">
                  <DoctorSearchResult />
                </li>
              </ul>
              <ul
                className="clear ListHospitalResult disabled"
                id="ListHospitalResult"
              >
                <li className="HospitalResult">
                  <HospitalSearchResult />
                </li>
                <li className="HospitalResult">
                  <HospitalSearchResult />
                </li>
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
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
          <div className="ResultFilter">
            <div className="DoctorResultFilters" id="DoctorResultFilters">
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Còn trống</header>
                </div>
                <div className="DoctorResultFilterContent">
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
                </div>
              </div>
              <div className="DoctorResultFilter">
                <div className="DoctorResultFilterHeader">
                  <header>Giờ đặc biệt</header>
                </div>
                <div className="DoctorResultFilterContent">
                  <label htmlFor="SH_intime">
                    <input
                      type="checkbox"
                      id="SH_intime"
                      name="SpeicalHours"
                      value="intime"
                    ></input>
                    Trong giờ hành chính
                  </label>

                  <label htmlFor="AA_today">
                    <input
                      type="checkbox"
                      id="SH_outtime"
                      name="SpeicalHours"
                      value="outtime"
                    ></input>
                    Ngoài giờ hành chính
                  </label>
                </div>
              </div>
              <div className="DoctorResultFilter">
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
              </div>
              <div className="DoctorResultFilter">
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
              </div>
            </div>
            <div className="HospitalResultFilters" id="HospitalResultFilters">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDoctor;
