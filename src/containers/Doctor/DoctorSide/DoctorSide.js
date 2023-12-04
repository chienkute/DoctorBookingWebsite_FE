import React, { useEffect } from "react";
import "./DoctorSide.scss";
import logo from "assets/logo.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorSide = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("hospital");
    navigate("/login");
    toast.success("Đăng xuất thành công!");
  };
  const { id } = useParams();
  useEffect(() => {
    if (!localStorage.getItem("doctor")) return navigate("/login");
  }, []);
  return (
    <div className="DoctorSideMenuContainer">
      <div className="DoctorSideMenuLogo">
        <a href="/doctor" alt="DoctorPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="DoctorMenu">
        <NavLink
          to={`/doctor/information/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Hồ sơ
        </NavLink>
        <NavLink
          to={`/doctor/manage-schedule/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lí lịch làm việc
        </NavLink>
        <NavLink
          to={`/doctor/appointment/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lí lịch hẹn
        </NavLink>
        <NavLink
          to={`/doctor/blog/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lý blog
        </NavLink>
        <NavLink
          to={`/doctor/service/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lý dịch vụ
        </NavLink>
        <NavLink
          to={`/doctor/specialty/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Quản lý chuyên khoa
        </NavLink>
        <NavLink
          to={`/doctor/change-password/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive DoctorMenu" : "DoctorMenu"
          }
        >
          Đổi mật khẩu
        </NavLink>
        <NavLink to={"/login"} className="DoctorMenu" onClick={handleLogout}>
          Đăng xuất
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorSide;
