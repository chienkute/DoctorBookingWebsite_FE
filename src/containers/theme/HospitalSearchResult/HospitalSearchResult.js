import React from "react";
import "./HospitalSearchResult.scss";
import avt from "assets/avatar.png";

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
              <span className="AddressIcon"></span> 47 Lê Đình Lý, Quận Thanh
              Khê, Thành phố Đà Nẵng
            </div>
            <div className="HospitalAddressLink bold">
              <a href="#">
                <span></span>
                Chỉ đường
              </a>
            </div>
            <div className="HospitalServiceType">
              <span className="ServiceIcon"></span>
              Có thể nhận lịch hẹn: <a href="#">Bác sĩ</a> |{" "}
              <a href="#">Dịch vụ</a>
            </div>
            <div className="HospitalDescription">
              <div className="HospitalDescriptionContent">
                Hệ thống phòng khám Sản - Phụ khoa Dr. Marie là đối tác chiến
                lược của tổ chức MSI Reproductive Choices. Phòng khám được thành
                lập từ năm 1994 và vận hành theo tiêu chuẩn Quốc tế với những
                dịch vụ thăm ...
              </div>
              <div className="HospitalDescriptionExpand">Xem thêm</div>
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
