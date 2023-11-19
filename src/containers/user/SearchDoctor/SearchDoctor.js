import "./SearchDoctor.scss";

import { FaTrashCan } from "react-icons/fa6";
import { FcPrevious, FcNext } from "react-icons/fc";
import DoctorSearchResult from "containers/theme/DoctorSearchResult/DoctorSearchResult";
import HospitalSearchResult from "containers/theme/HospitalSearchResult/HospitalSearchResult";

function SearchDoctor() {
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
      <div className="SearchResultPageContent">
        <div className="SearchInputRows">
          <div className="ProvinceInput">
            <input
              list="Province"
              name="ProvinceInputField"
              placeholder="Nhập tỉnh thành"
            ></input>
            <datalist id="Province">
              <option value="Tỉnh thành 1" />
              <option value="Tỉnh thành 2" />
              <option value="Tỉnh thành 3" />
              <option value="Tỉnh thành 4" />
              <option value="Tỉnh thành 5" />
              <option value="Tỉnh thành 6" />
            </datalist>
          </div>
          <div className="TextInput">
            <input
              name="TextInputField"
              placeholder="Nhập tên bác sĩ, chuyên khoa, bệnh viện, dịch vụ, v.v.."
            ></input>
          </div>
        </div>
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
              <li className="DoctorResult">
                <DoctorSearchResult />
              </li>
              <li className="DoctorResult">
                <DoctorSearchResult />
              </li>
              <li className="DoctorResult">
                <DoctorSearchResult />
              </li>
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
              <li className="HospitalResult">
                <HospitalSearchResult />
              </li>
            </ul>
            <div className="PageMonitor">
              <div className="PrevPage flex-center disabled">
                <FcPrevious />
              </div>
              <ul className="Pages clear">
                <li className="Page flex-center bold selected">1</li>
                <li className="Page flex-center bold">2</li>
                <li className="Page flex-center bold">3</li>
                <li className="Page flex-center bold">4</li>
                <li className="Page flex-center bold">5</li>
              </ul>
              <div className="NextPage flex-center">
                <FcNext />
              </div>
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
  );
}

export default SearchDoctor;
