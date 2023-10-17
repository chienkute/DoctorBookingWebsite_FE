import React from "react";
import "./UserPage.scss";
import avtImg from "assets/avatar.png";
import { FaUserAlt, FaHeartbeat } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

class UserPage extends React.Component {
  render() {
    return (
      <div className="UserPageContainer">
        <div className="UserPageContent">
          <div className="UserPageMenu">
            <ul className="ListOption clear">
              <li className="Option selected">
                <div className="OptionIcon">
                  <FaUserAlt />
                </div>
                <div className="OptionName">Hồ sơ</div>
              </li>
              <li className="Option">
                <div className="OptionIcon">
                  <FaHeartbeat />
                </div>
                <div className="OptionName">Sức khoẻ của tôi</div>
              </li>
              <li className="Option">
                <div className="OptionIcon">
                  <FcCalendar />
                </div>
                <div className="OptionName">Quản lí cuộc hẹn</div>
              </li>
              <li className="Option">
                <div className="OptionIcon">
                  <MdHelp />
                </div>
                <div className="OptionName">Trợ giúp</div>
              </li>
              <li className="Option">
                <div className="OptionIcon">
                  <HiOutlineLogout />
                </div>
                <div className="OptionName">Đăng xuất</div>
              </li>
            </ul>
          </div>
          <div className="UserInfo">
            <div className="UserInfoHeader">
              <h3>
                <b>Hồ sơ</b>
              </h3>
              <div className="UserInfoEdit">
                <b>Chỉnh sửa</b>
              </div>
            </div>
            <div className="UserBasicInfo">
              <div className="UserAvatar">
                <img src={avtImg} alt="Blog Img"></img>
              </div>
              <div className="UserAccount">
                <p>
                  <b>Họ và tên</b>
                </p>
                <p className="UserAccountName">username</p>
              </div>
            </div>
            <div className="UserPersonalInfo">
              <ul className="ListPersonalInfos clear">
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Tên truy cập</b>
                  </p>
                  <p className="PersonalInfoData">username</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Họ và tên</b>
                  </p>
                  <p className="PersonalInfoData">Họ và tên</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Email</b>
                  </p>
                  <p className="PersonalInfoData">example@email.com</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Ngày sinh</b>
                  </p>
                  <p className="PersonalInfoData">01/01/1970</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Giới tính</b>
                  </p>
                  <p className="PersonalInfoData">Nam</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Tỉnh</b>
                  </p>
                  <p className="PersonalInfoData">--</p>
                </li>
                <li className="PersonalInfo">
                  <p className="PersonalInfoHeader">
                    <b>Số điện thoại</b>
                  </p>
                  <p className="PersonalInfoData">--</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
