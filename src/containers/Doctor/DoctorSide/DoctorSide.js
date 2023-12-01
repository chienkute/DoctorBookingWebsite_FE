import React from "react";
import "./DoctorSide.scss";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

const DoctorSide = () => {
  return (
    <div className="DoctorSideMenuContainer">
      <div className="DoctorSideMenuLogo">
        <a href="/doctor" alt="DoctorPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>    
      <div className="DoctorMenu">
        <NavLink
          to={"/doctor/information"}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Hồ sơ
        </NavLink>
        <NavLink
          to={"/doctor/manageSchedule"}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lí lịch làm việc
        </NavLink>
        <NavLink to={"/login"} className="DoctorMenu">
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorSide;
