import React from "react";
import "./NavBar.scss";
import { FaFileLines, FaHeartPulse, FaNewspaper } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavigationContainer">
        <ul className="NavigationList clear flex-center">
          <li className="Navigation bold">
            <a
              href="/categories"
              className="flex-center clear"
              style={{ marginLeft: "20px" }}
            >
              <div className="NavigationIcon flex-center">
                <FaFileLines />
              </div>
              <div className="NavigationName">
                <span>Chuyên mục</span>
              </div>
            </a>
          </li>
          <li className="Navigation bold">
            <a
              href="/care/"
              className="flex-center clear"
              style={{ marginLeft: "30px" }}
            >
              <div className="NavigationIcon flex-center">
                <GrSchedules />
              </div>
              <div className="NavigationName">Đặt lịch hẹn</div>
            </a>
          </li>
          <li className="Navigation bold">
            <a href="/tool" className="flex-center clear">
              <div className="NavigationIcon flex-center">
                <FaHeartPulse />
              </div>
              <div className="NavigationName">Kiểm tra sức khoẻ</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
