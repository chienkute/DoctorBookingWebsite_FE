import { memo, React, useEffect, useState } from "react";
import "./UserPage.scss";
import avtImg from "assets/avatar.png";
import { FaUserAlt, FaHeartbeat } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdHelp } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  if (user === null) {
    return <div className="UserPageContainer"></div>;
  }
  const handleEdit = () => {
    setEdit(!edit);
  };
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
              <p>{user.user.name ? <b>{user.user.name}</b> : <b>---</b>}</p>
              {user.account.username ? (
                <p className="UserAccountName">{user.account.username}</p>
              ) : (
                <p className="UserAccountName">---</p>
              )}
            </div>
          </div>
          <form className="UserPersonalInfo">
            <div className="ListPersonalInfos clear">
              <div className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Tên truy cập</b>
                </p>
                <p className="PersonalInfoData">{user.account.username}</p>
              </div>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Họ và tên</b>
                </p>
                <p className="PersonalInfoData">{user.user.name}</p>
              </li>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Email</b>
                </p>
                <p className="PersonalInfoData">{user.account.email}</p>
              </li>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Ngày sinh</b>
                </p>
                <p className="PersonalInfoData">{user.user.birthday}</p>
              </li>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Giới tính</b>
                </p>
                {user.user.gender === true ? (
                  <p className="PersonalInfoData">Nam</p>
                ) : user.user.gender === false ? (
                  <p className="PersonalInfoData">Nữ</p>
                ) : (
                  <p className="PersonalInfoData"></p>
                )}
              </li>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Tỉnh</b>
                </p>
                <p className="PersonalInfoData">{user.user.address}</p>
              </li>
              <li className="PersonalInfo">
                <p className="PersonalInfoHeader">
                  <b>Số điện thoại</b>
                </p>
                <p className="PersonalInfoData">{user.user.phone}</p>
              </li>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(UserPage);
