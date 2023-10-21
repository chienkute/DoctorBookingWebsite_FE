import "./SearchDoctor.scss";

import { FaTrashCan } from "react-icons/fa6";
import { FcPrevious, FcNext } from "react-icons/fc";
import DoctorSearchResult from "containers/theme/DoctorSearchResult/DoctorSearchResult";

function SearchDoctor() {
  return (
    <div className="SearchDoctorPageContainer">
      <div className="SearchDoctorPageContent">
        <div className="SearchDoctorInputRows">
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
        <div className="SearchDoctorResultContainer">
          <div className="SearchDoctorResultLabel bold">
            <label>86 kết quả tìm được</label>
          </div>
          <div className="SearchDoctorResultHeader">
            <ul className="clear ResultFilters">
              <li className="ResultFilter bold selection">
                <div className="FilterName">Bác sĩ</div>
              </li>
              <li className="ResultFilter bold">
                <div className="FilterName">Bệnh viện</div>
              </li>
            </ul>
          </div>
          <div className="SearchDoctorResultContent">
            <ul className="clear ListResult">
              <li className="Result">
                <DoctorSearchResult />
              </li>
              <li className="Result">
                <DoctorSearchResult />
              </li>
              <li className="Result">
                <DoctorSearchResult />
              </li>
              <li className="Result">
                <DoctorSearchResult />
              </li>
              <li className="Result">
                <DoctorSearchResult />
              </li>
            </ul>
          </div>
          <div className="DoctorResultPageMonitor">
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
        <div className="DoctorResultFilters">
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
        </div>
      </div>
    </div>
  );
}

export default SearchDoctor;