import React, { useContext, useEffect } from "react";
import "./hospitalSide.scss";
import logo from "assets/logo.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UpdateContext } from "context/UpdateContext";

const HospitalSide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(UpdateContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("hospital");
    navigate("/login");
    toast.success("Đăng xuất thành công!");
  };
  const handleCallAPI = () => {
    setUpdate(!update);
  };
  useEffect(() => {
    if (!localStorage.getItem("hospital")) return navigate("/login");
  }, []);
  return (
    <div className="AdminSideMenuContainer">
      <div className="AdminSideMenuLogo">
        <a href="/admin" alt="AdminPageLink">
          <img src={logo} alt="Logo"></img>
        </a>
      </div>
      <div className="AdminMenu">
        <NavLink
          to={`/hospital/information/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
          onClick={handleCallAPI}
        >
          Hồ sơ
        </NavLink>
        <NavLink
          to={`/hospital/doctormanagement/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
          onClick={handleCallAPI}
        >
          Quản lí bác sĩ
        </NavLink>
        <NavLink
          to={`/hospital/changepassword/${id}`}
          className={({ isActive }) =>
            isActive ? "sideBarActive AdminMenu" : "AdminMenu"
          }
          onClick={handleCallAPI}
        >
          Đổi mật khẩu
        </NavLink>
        <NavLink to={"/login"} className="AdminMenu" onClick={handleLogout}>
          Đăng xuất
        </NavLink>
        <NavLink to={"/hospital/dashboard"} className="AdminMenu">
          Thống kê
        </NavLink>
      </div>
    </div>
  );
};

export default HospitalSide;
