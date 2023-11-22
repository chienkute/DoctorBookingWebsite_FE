import React from "react";
import "./HospitalSearchResult.scss";
import avt from "assets/avatar.png";
import { MdLocationOn } from "react-icons/md";
class HospitalSearchResult extends React.Component {
  render() {
    return (
      <div className="HospitalSearchResultContainer">
        <div className="HospitalSearchResultContent">
          <div className="HospitalAvatar">
            <img src={avt} alt="Avatar"></img>
          </div>
          <div className="HospitalInfo">
            <div className="HospitalName">Dr. Marie Đà Nẵng</div>
            <div className="HospitalAddress">
              <span className="AddressIcon">
                <MdLocationOn></MdLocationOn>
              </span>{" "}
              <p>47 Lê Đình Lý, Quận Thanh Khê, Thành phố Đà Nẵng</p>
            </div>
            <div className="HospitalDescriptionContent">
              Hệ thống phòng khám Sản - Phụ khoa Dr. Marie là đối tác chiến lược
              của tổ chức MSI Reproductive Choices. Phòng khám được thành lập từ
              năm 1994
            </div>
          </div>
        </div>
        <div className="HospitalSearchResultFooter">
          <button className="HospitalViewButton bold">Xem bệnh viện</button>
        </div>
      </div>
    );
  }
}

export default HospitalSearchResult;
