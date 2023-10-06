import logo from "../../../assets/logo.png";
import React from "react";
import { FaSistrix } from "react-icons/fa6";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="HeaderContainer flex-center">
        <div className="HeaderLogoContainer">
          <img src={logo} alt="Logo" id="HeaderLogo"></img>
        </div>
        <div className="HeaderSearchContainer">
          <div className="HeaderSearchIcon flex-center">
            <FaSistrix />
          </div>
          <div className="HeaderSearchInput flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              id="HeaderSearch"
            ></input>
          </div>
        </div>
        <div className="HeaderCategoryContainer">
          <ul className="HeaderListCategory flex-center clear">
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink">
                <a href="#" className="bold">
                  Chuyên mục
                </a>
              </div>
            </li>
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink">
                <a href="#" className="bold">
                  Kiểm tra sức khoẻ
                </a>
              </div>
            </li>
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink">
                <a href="#" className="bold">
                  Đặt lịch với bác sĩ
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="HeaderUserContainer flex-center">
          <Link to={"/login"} className="LoginButtonContainer bold">
            Đăng nhập
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
