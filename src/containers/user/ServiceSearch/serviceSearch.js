import "../../user/SearchDoctor/SearchDoctor.scss";
import "../../user/HospitalPage/hospitalPage.scss";
import ReactPaginate from "react-paginate";
import { FaTrashCan } from "react-icons/fa6";
import "../../theme/DoctorSearchResult/DoctorSearchResult.scss";
import "../../../style/page.scss";
import hospavt from "../../../assets/hospital.jpg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "../ServiceSearch/serviceSearch.scss";
const serviceSearch = () => {
  return (
    <div className="serviceSearch">
      <div className="SearchDoctorPageContent serviceSearch__page">
        <div className="SearchDoctorInputRows"></div>
        <div className="SearchDoctorResultContainer">
          <div className="SearchDoctorResultLabel bold">
            <label>86 kết quả tìm được</label>
          </div>
          <div className="SearchDoctorResultContent">
            {/* <div className="care__banner_button">
              <div className="care__banner_input flex-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  id="care__ins"
                ></input>
              </div>
            </div> */}
            <div className="hospital__body_dichvu_result">
              <div className="hospital__body_dichvu_info">
                <a href="/care/dich-vu">Thăm khám và tư vấn</a>
                <div className="hospital__body_dichvu_price">
                  <div className="hospital__body_dichvu_price_icon">
                    <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                  </div>
                  <p>800.000</p>
                </div>
              </div>
              <div className="hospital__body_dichvu_bottom">
                <div className="hospital__body_dichvu_bottom_avtHosp">
                  <img src={hospavt} alt="" />
                </div>
                <div className="hospital__body_dichvu_bottom_descrip">
                  <a href="#">Phòng Khám ACC - Chiropractic Đà Nẵng</a>
                  <p>
                    112 Đường 2 Tháng 9, phường Bình Thuận, Hải Châu, Đà Nẵng,
                    Viet Nam
                  </p>
                </div>
                <button
                  type="button"
                  className="btn button hospital__body_dichvu_bottom_button"
                >
                  Đặt Lịch Hẹn
                </button>
              </div>
            </div>
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
        {/* <div className="DoctorResultFilters">
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
                Tư vấn từ xa
              </label>

              <label htmlFor="HT_children">
                <input
                  type="checkbox"
                  id="HT_children"
                  name="HumanType"
                  value="children"
                ></input>
                Tư vấn trực tiếp
              </label>
            </div>
          </div>
          <div className="DoctorResultFilter">
            <div className="DoctorResultFilterHeader">
              <header>Giới tính</header>
            </div>
            <div className="DoctorResultFilterContent">
              <label htmlFor="HT_adult">
                <input
                  type="checkbox"
                  id="S_male"
                  name="Sex"
                  value="male"
                ></input>
                Nam
              </label>

              <label htmlFor="HT_children">
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
                <input type="number" name="MinPrice" id="MinPriceField"></input>
              </div>
              <div>đến</div>
              <div className="InputMaxPrice flex-center">
                <span>đ </span>
                <input type="number" name="MaxPrice" id="MaxPriceField"></input>
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
        </div> */}
      </div>
    </div>
  );
};

export default serviceSearch;
