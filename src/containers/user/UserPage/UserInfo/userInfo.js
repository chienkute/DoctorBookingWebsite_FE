import { memo, useContext, useEffect, useState } from "react";
import avtImg from "assets/avatar.png";
import Moment from "react-moment";
import { editUser, getUserID } from "service/UserService";
import UserTab from "../../UserTab/userTab";
import "../../UserPage/UserPage.scss";
import { LoadingContext } from "context/LoadingContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  // const [id, setId] = useState(null);
  const { id } = useParams();
  const [nameOld, setNameOld] = useState("");
  const [nameNew, setNameNew] = useState("");
  const [birthdayOld, setBirthdayOld] = useState("");
  const [birthdayNew, setBirthdayNew] = useState("");
  const [adressOld, setAdressOld] = useState("");
  const [adressNew, setAdressNew] = useState("");
  const [genderOld, setGenderOld] = useState("");
  const [genderNew, setGenderNew] = useState("");
  const [phoneOld, setPhoneOld] = useState("");
  const [phoneNew, setPhoneNew] = useState("");
  const [usernameOld, setUsernameOld] = useState("");
  const { loading, setLoading } = useContext(LoadingContext);
  console.log(birthdayNew);
  console.log(genderNew);
  console.log(adressNew);
  console.log(phoneNew);
  const editUserInfo = async () => {
    let res = await editUser(
      id,
      nameNew,
      genderNew,
      phoneNew,
      adressNew,
      birthdayNew,
    );
    if (res) {
      setEdit(false);
    } else {
      toast.error("Sửa đổi thất bại");
    }
  };
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  const getUserByID = async () => {
    let res = await getUserID(id);
    if (res) {
      setNameOld(res?.name);
      setBirthdayOld(res?.birthday);
      setGenderOld(res?.gender);
      setPhoneOld(res?.phone);
      setAdressOld(res?.address);
      setUsernameOld(res?.account?.username);
      setNameNew(res?.name);
      setBirthdayNew(res?.birthday);
      setGenderNew(res?.gender);
      setPhoneNew(res?.phone);
      setAdressNew(res?.address);
    }
  };
  useEffect(() => {
    getUser();
    const loadUser = () => {
      if (user) {
        setLoading(false);
      }
    };
    loadUser();
    getUserByID();
  }, []);
  if (user === null) {
    return <div className="UserPageContainer"></div>;
  }
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        {loading ? (
          <div className="lds lds-user">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="UserInfo">
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
                <img src={avtImg} alt="BlogImg"></img>
              </div>
              <div className="UserAccount">
                <p>
                  {user?.user?.name ? <b>{user?.user?.name}</b> : <b>---</b>}
                </p>
                {user?.account?.username ? (
                  <p className="UserAccountName">{user?.account?.username}</p>
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
                  getUserByID();
                }}
              >
                <div className="user__info">
                  <label htmlFor="">Họ và tên</label>
                  <div className="user__info_input">
                    <input
                      type="text"
                      placeholder="Nhập họ và tên của bạn"
                      defaultValue={nameNew}
                      onChange={(e) => {
                        setNameNew(e.target.value);
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
                      defaultValue={birthdayNew}
                      onChange={(e) => {
                        setBirthdayNew(e.target.value);
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
                          setGenderNew(e.target.value);
                        }}
                        checked={genderNew ? true : false}
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
                          setGenderNew(e.target.value);
                        }}
                        checked={genderNew ? false : true}
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
                      defaultValue={adressNew}
                      onChange={(e) => {
                        setAdressNew(e.target.value);
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
                      defaultValue={phoneNew}
                      onChange={(e) => {
                        setPhoneNew(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="user__button">
                  <a
                    href="#"
                    onClick={() => {
                      setEdit(false);
                      getUserByID();
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
                    <p className="PersonalInfoData">{usernameOld}</p>
                  </div>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Họ và tên</b>
                    </p>
                    <p className="PersonalInfoData">{nameOld}</p>
                  </li>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Email</b>
                    </p>
                    <p className="PersonalInfoData">{user?.account?.email}</p>
                  </li>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Ngày sinh</b>
                    </p>
                    <p className="PersonalInfoData">
                      <Moment format="DD/MM/YYYY">{birthdayOld}</Moment>
                    </p>
                  </li>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Giới tính</b>
                    </p>
                    {genderOld === true ? (
                      <p className="PersonalInfoData">Nam</p>
                    ) : genderOld === false ? (
                      <p className="PersonalInfoData">Nữ</p>
                    ) : (
                      <p className="PersonalInfoData"></p>
                    )}
                  </li>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Địa chỉ</b>
                    </p>
                    <p className="PersonalInfoData">{adressOld}</p>
                  </li>
                  <li className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Số điện thoại</b>
                    </p>
                    <p className="PersonalInfoData">{phoneOld}</p>
                  </li>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(UserInfo);
