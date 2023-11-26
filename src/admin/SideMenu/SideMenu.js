import React from "react";
import "./SideMenu.scss";
import logo from "assets/logo.png";

class SideMenu extends React.Component {
  componentDidMount() {
    document.getElementById(this.props.menuName).classList.add("selected");
  }

  gotoAdminFunction = (menuLink) => {
    window.location.href = menuLink;
  };

  render() {
    return (
      <div className="AdminSideMenuContainer">
        <div className="AdminSideMenuLogo flex-center">
          <a href="/admin" alt="AdminPageLink">
            <img src={logo} alt="Logo"></img>
          </a>
        </div>
        <div className="AdminMenu">
          <ul className="clear AdminListMenu">
            <li
              className="AdminMenu"
              id="AdminMenuDashboard"
              onClick={() => {
                this.gotoAdminFunction("/admin/dashboard");
              }}
            >
              Trang chủ
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuUser"
              onClick={() => {
                this.gotoAdminFunction("/admin/user");
              }}
            >
              Quản lí người dùng
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuTopic"
              onClick={() => {
                this.gotoAdminFunction("/admin/topic");
              }}
            >
              Quản lí chuyên mục
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuPost"
              onClick={() => {
                this.gotoAdminFunction("/admin/post");
              }}
            >
              Quản lí bài viết
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuTool"
              onClick={() => {
                this.gotoAdminFunction("/admin/tool");
              }}
            >
              Quản lí công cụ
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuHospital"
              onClick={() => {
                this.gotoAdminFunction("/admin/hospital");
              }}
            >
              Quản lí cơ sở KCB
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuSpecialist"
              onClick={() => {
                this.gotoAdminFunction("/admin/specialist");
              }}
            >
              Quản lí chuyên khoa
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideMenu;
