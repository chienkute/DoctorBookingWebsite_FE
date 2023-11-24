import React from "react";
import "./SideMenu.scss";
import logo from "assets/logo.png";

class SideMenu extends React.Component {
  changeStyleMenu = (menuName) => {
    let listMenu = document.querySelectorAll("li.AdminMenu");
    listMenu.forEach((element) => {
      element.classList.remove("selected");
    });
    document.getElementById(menuName).classList.add("selected");
  };

  render() {
    const { changeAdminMenu } = this.props;

    return (
      <div className="AdminSideMenuContainer">
        <div className="AdminSideMenuLogo flex-center">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="AdminMenu">
          <ul className="clear AdminListMenu">
            <li
              className="AdminMenu selected"
              id="AdminMenuDashboard"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Trang chủ
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuUser"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Quản lí người dùng
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuTopic"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Quản lí chuyên mục
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuPost"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Quản lí bài viết
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuTool"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Quản lí công cụ
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuHospital"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
              }}
            >
              Quản lí cơ sở KCB
            </li>
            <li
              className="AdminMenu"
              id="AdminMenuSpecialist"
              onClick={(event) => {
                this.changeStyleMenu(event.target.id);
                changeAdminMenu(event.target.id);
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
