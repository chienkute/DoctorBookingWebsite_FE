import React from "react";
import "./DoctorSearchResult.scss";
import avt from "assets/avatar.png";

class DoctorSearchResult extends React.Component {
  render() {
    return (
      <div className="DoctorSearchResultContainer">
        <div className="DoctorHeader flex-center">
          <div className="DoctorAvatar">
            <img src={avt} alt="avt img"></img>
          </div>
          <div className="DoctorInfo">
            <div className="DoctorName bold">BS. Nguyễn Thanh Tâm</div>
            <div className="DoctorSpeicalist">Đa khoa, Nội tổng quát</div>
            <div className="TagContainer">
              <div className="DirectTag">Tư vấn trực tiếp</div>
              <div className="AwayTag">Tư vấn từ xa</div>
              <div className="ChildrenTag">Dành cho trẻ em</div>
              <div className="AdultTag">Dành cho người lớn</div>
            </div>
          </div>
        </div>
        <div className="DoctorFooter">
          <div className="DoctorOfficeAvatar">
            <img src={avt} alt="avt img"></img>
          </div>
          <div className="DoctorOffice">
            <div className="DoctorOfficeName bold">
              Phòng khám Đa khoa trực tuyến BS. Nguyễn Thanh Tâm
            </div>
            <div className="DoctorOfficeAddress">
              Ho Chi Minh, Ho Chi Minh City, Vietnam
            </div>
          </div>
          <div className="BookDoctor">
            <button className="BookDoctorButton bold">Đặt lịch hẹn</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorSearchResult;
