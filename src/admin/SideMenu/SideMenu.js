import React from "react";
import "./SideMenu.scss";
import logo from "assets/logo.png";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="AdminSideMenuContainer">
      <div className="AdminSideMenuLogo">
        <a href="/admin" alt="AdminPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="AdminMenu">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to={"/admin/user"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí người dùng
        </NavLink>
        <NavLink
          to={"/admin/topic"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí chuyên mục
        </NavLink>
        <NavLink
          to={"/admin/post"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí bài viết
        </NavLink>
        <NavLink
          to={"/admin/hospital"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí cơ sở KCB
        </NavLink>
        <NavLink
          to={"/admin/specialist"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí chuyên khoa
        </NavLink>
        <NavLink
          to={"/admin/statistic"}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Thống kê
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
