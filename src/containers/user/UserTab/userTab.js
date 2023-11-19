import { memo } from "react";
import { FaUserAlt, FaHeartbeat } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import config from "../../../config/routes";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const UserTab = () => {
  return (
    <div className="UserPageMenu">
      <div className="ListOption clear">
        <NavLink
          to={config.userinfo}
          className={({ isActive }) =>
            isActive ? "sideBarActive Option selected" : "Option selected"
          }
        >
          <div className="OptionIcon">
            <FaUserAlt />
          </div>
          <div className="OptionName">Hồ sơ</div>
        </NavLink>
        <NavLink
          to={"/user/history"}
          className={({ isActive }) =>
            isActive ? "sideBarActive Option selected" : "Option selected"
          }
        >
          <div className="OptionIcon">
            <FaHeartbeat />
          </div>
          <div className="OptionName">Sức khoẻ của tôi</div>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "sideBarActive Option selected" : "Option selected"
          }
        >
          <div className="OptionIcon">
            <FaCalendarAlt></FaCalendarAlt>
          </div>
          <div className="OptionName">Quản lí cuộc hẹn</div>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "sideBarActive Option selected" : "Option"
          }
        >
          <div className="OptionIcon">
            <RiLockPasswordFill></RiLockPasswordFill>
          </div>
          <div className="OptionName">Đổi mật khẩu</div>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "sideBarActive Option selected" : "Option selected"
          }
        >
          <div className="OptionIcon">
            <MdHelp />
          </div>
          <div className="OptionName">Trợ giúp</div>
        </NavLink>
        <NavLink href="/login/" className="Option">
          <div className="OptionIcon">
            <HiOutlineLogout />
          </div>
          <div className="OptionName">Đăng xuất</div>
        </NavLink>
      </div>
    </div>
  );
};
export default memo(UserTab);
