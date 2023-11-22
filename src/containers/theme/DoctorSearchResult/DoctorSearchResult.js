import React, { useEffect, useState } from "react";
import "./DoctorSearchResult.scss";
import avt from "../../../assets/avatar.png";
import { fetchAllDoctor } from "service/UserService";
import { useNavigate } from "react-router-dom";
const DoctorSearchResult = () => {
  const [doctor, setDoctor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getDoctor();
  }, []);
  const getDoctor = async () => {
    let res = await fetchAllDoctor();
    setDoctor(res.results);
    console.log(res.results);
  };
  return (
    <div>
      {doctor &&
        doctor.map((item, index) => {
          return (
            <div className="DoctorSearchResultContainer">
              <a
                href=""
                className="DoctorHeader flex-center"
                onClick={() => {
                  navigate(`/care/doctor/${item.id}`);
                }}
              >
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
              </a>
              <a href="/care/hospital" className="DoctorFooter">
                <div className="DoctorOfficeAvatar">
                  <img src={avt} alt="avt img"></img>
                </div>
                <div className="DoctorOffice">
                  <div className="DoctorOfficeName">
                    Phòng khám Đa khoa trực tuyến BS. Nguyễn Thanh Tâm
                  </div>
                  <div className="DoctorOfficeAddress">
                    Ho Chi Minh, Ho Chi Minh City, Vietnam
                  </div>
                </div>
                <div className="BookDoctor">
                  <button className="BookDoctorButton bold">
                    Đặt lịch hẹn
                  </button>
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default DoctorSearchResult;
