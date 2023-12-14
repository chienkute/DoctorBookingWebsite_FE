import React, { useEffect } from "react";
import "./SideMenu.scss";
import logo from "assets/logo.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const SideMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/login");
    toast.success("Đăng xuất thành công!");
  };
  useEffect(() => {
    if (!localStorage.getItem("admin")) return navigate("/login");
  }, []);
  return (
    <div className="AdminSideMenuContainer">
      <div className="AdminSideMenuLogo">
        <a href="/admin/user" alt="AdminPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="AdminMenu">
        <NavLink
          to={`/admin/account/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí tài khoản
        </NavLink>
        <NavLink
          to={`/admin/topic/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí chuyên mục
        </NavLink>
        <NavLink
          to={`/admin/speciality/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí chuyên khoa
        </NavLink>
        <NavLink
          to={`/admin/service/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
        >
          Quản lí dịch vụ
        </NavLink>
        <NavLink to={"/login"} className="DoctorMenu" onClick={handleLogout}>
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
