import UserTab from "containers/user/UserTab/userTab";
import { memo } from "react";
const UserHistory = () => {
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        <h1>History</h1>
        {/* <div className="UserInfo">
      <div className="UserInfoHeader">
        <h3>
          <b>Hồ sơ</b>
        </h3>
        {edit ? (
          <div></div>
        ) : (
          <div className="UserInfoEdit">
            <b onClick={handleEdit}>Chỉnh sửa</b>
          </div>
        )}
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
      {edit ? (
        <form
          className="user"
          onSubmit={(e) => {
            e.preventDefault();
            editUserInfo();
            setEdit(false);
          }}
        >
          <div className="user__info">
            <label htmlFor="">Họ và tên</label>
            <div className="user__info_input">
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn"
                defaultValue={user.user.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="user__info">
            <label htmlFor="">Ngày sinh</label>
            <div className="user__info_input">
              <input
                type="date"
                name=""
                id=""
                defaultValue={user.user.birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="user__info">
            <label htmlFor="">Giới tính</label>
            <div className="user__info_radio">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="nam"
                  value="true"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={user.user.gender ? true : false}
                />
                <label class="form-check-label" for="nam">
                  Nam
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="nu"
                  value="false"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  checked={user.user.gender ? false : true}
                />
                <label class="form-check-label" for="nu">
                  Nữ
                </label>
              </div>
            </div>
          </div>
          <div className="user__info">
            <label htmlFor="">Địa chỉ</label>
            <div className="user__info_input">
              <input
                type="text"
                placeholder="Nhập địa chỉ của bạn"
                defaultValue={user.user.address}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="user__info">
            <label>Số điện thoại</label>
            <div className="user__info_input">
              <input
                type="text"
                placeholder="Nhập số điện thoại"
                defaultValue={user.user.phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="user__button">
            <a
              href="#"
              onClick={() => {
                setEdit(false);
              }}
            >
              Hủy
            </a>
            <button>Lưu thay đổi</button>
          </div>
        </form>
      ) : (
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
              <p className="PersonalInfoData">{name}</p>
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
              <p className="PersonalInfoData">
                {user.user.birthday ? (
                  <Moment format="DD/MM/YYYY">{user.user.birthday}</Moment>
                ) : (
                  <p></p>
                )}
              </p>
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
                <b>Địa chỉ</b>
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
      )}
    </div> */}
      </div>
    </div>
  );
};
export default memo(UserHistory);
