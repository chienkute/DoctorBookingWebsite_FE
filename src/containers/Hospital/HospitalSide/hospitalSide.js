import React from "react";
import "./hospitalSide.scss";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

const HospitalSide = () => {
  return (
    <div className="AdminSideMenuContainer">
      <div className="AdminSideMenuLogo">
        <a href="/admin" alt="AdminPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="AdminMenu">
        <NavLink
          to={"/hospital/information"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Hồ sơ
        </NavLink>
        <NavLink
          to={"/hospital/doctormanagement"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí bác sĩ
        </NavLink>
        <NavLink
          to={"/hospital/changepassword"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Đổi mật khẩu
        </NavLink>
        <NavLink to={"/login"} className="AdminMenu">
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default HospitalSide;
