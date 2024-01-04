import { memo, useContext, useEffect, useState } from "react";
import avtImg from "assets/avatar.png";
import Moment from "react-moment";
import { editAvatar, editUser, getUserID } from "service/UserService";
import UserTab from "../../UserTab/userTab";
import "../../UserPage/UserPage.scss";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdPhotoCamera } from "react-icons/md";
import { UpdateContext } from "context/UpdateContext";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChanging } from "redux/userSlice";
const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
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
  const [idAccount, setIdAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const { update, setUpdate } = useContext(UpdateContext);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [imageUpdate, setImageUpdate] = useState([]);
  const [imageOld, setImageOld] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.changing);
  const [urlImage, setUrlImage] = useState("");
  const toDataURL = (url) =>
    fetch(urlImage)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }),
      );
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const changeFileObejct = () => {
    toDataURL(urlImage).then((dataUrl) => {
      var fileData = dataURLtoFile(dataUrl, "icon.jpg");
      setImageUpdate(fileData);
    });
  };
  useEffect(() => {
    changeFileObejct();
  }, [urlImage]);
  const updatedChange = {
    changing: !state,
  };
  const updateAgain = {
    chaing: !state,
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    if (imageUpdate !== null) {
      const updatedFormData = new FormData();
      updatedFormData.append("avatar", imageUpdate);
      setFormData(updatedFormData);
    }
  }, [imageUpdate]);
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const editAvatarUser = async () => {
    let res = await editAvatar(idAccount, formData);
    if (res) {
      localStorage.setItem("account", JSON.stringify(res));
      console.log(res);
    }
  };
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
      console.log(res);
      toast.success("Sửa đổi thành công");
      localStorage.setItem("user", JSON.stringify(res));
      setTimeout(() => {
        dispatch(updateChanging(updatedChange));
      }, [1000]);
      // dispatch(updateChanging(updatedChange));
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
      console.log(res);
      setNameOld(res?.name);
      setBirthdayOld(res?.birthday);
      setGenderOld(res?.gender);
      setPhoneOld(res?.phone);
      setAdressOld(res?.address);
      setNameNew(res?.name);
      setBirthdayNew(res?.birthday);
      setGenderNew(res?.gender);
      setPhoneNew(res?.phone);
      setAdressNew(res?.address);
      setImageOld(res?.account?.avatar);
      setIdAccount(res?.account?.id);
      setUrlImage(res?.account?.avatar);
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
    // eslint-disable-next-line
  }, []);
  if (user === null) {
    return <div className="UserPageContainer"></div>;
  }
  const handleEdit = () => {
    setEdit(true);
    dispatch(updateChanging(updatedChange));
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
                {image ? (
                  <img
                    src={image}
                    alt="BlogImg"
                    className="avatarAfter"
                    style={{
                      transform: "translateX(15px)",
                    }}
                  ></img>
                ) : imageOld ? (
                  <img
                    src={imageOld}
                    alt="BlogImg"
                    className="avatarBefore"
                  ></img>
                ) : (
                  <img
                    src={avtImg}
                    alt="BlogImg"
                    className="avatarBefore"
                  ></img>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
              {edit ? (
                <div
                  className="upload__image"
                  role="button"
                  onClick={handleImageClick}
                >
                  <MdPhotoCamera></MdPhotoCamera>
                </div>
              ) : (
                <div className="upload__image" role="button">
                  <MdPhotoCamera></MdPhotoCamera>
                </div>
              )}

              <div className="UserAccount">
                <p>{nameOld ? <b>{nameOld}</b> : <b>---</b>}</p>
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
                  editAvatarUser();
                  dispatch(updateChanging(updatedChange));
                  setTimeout(() => {
                    dispatch(updateChanging(updateAgain));
                  });
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
                  <div className="doctor__info_input">
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
                  <Link
                    onClick={() => {
                      setEdit(false);
                      getUserByID();
                    }}
                  >
                    Hủy
                  </Link>
                  <button
                    onClick={() => {
                      setUpdate(!update);
                      // dispatch(updateChanging(updatedChange));
                    }}
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            ) : (
              <form className="UserPersonalInfo">
                <div className="ListPersonalInfos clear">
                  <div className="PersonalInfo">
                    <p className="PersonalInfoHeader">
                      <b>Tên truy cập</b>
                    </p>
                    <p className="PersonalInfoData">
                      {user?.account?.username}
                    </p>
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
                    {birthdayOld ? (
                      <p className="PersonalInfoData">
                        <Moment format="DD/MM/YYYY">{birthdayOld}</Moment>
                      </p>
                    ) : (
                      <p className="PersonalInfoData">--</p>
                    )}
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
