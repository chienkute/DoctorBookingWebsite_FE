import logo from "../../../assets/logo.png";
import React, { useContext, useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import imageChuyenMuc1 from "../../../assets/chuyenmuc/medical.png";
// import imageskhoe1 from "../../../assets/suckhoe/kiemtraskhoe1.png";
// import imageskhoe2 from "../../../assets/suckhoe/ktraskhoe2.png";
// import imageskhoe3 from "../../../assets/suckhoe/ktrasuckhoe3.png";
// import imageskhoe4 from "../../../assets/suckhoe/ktraskhoe4.png";
// import imageskhoe5 from "../../../assets/suckhoe/ktrasuckhoe5.png";
// import imageskhoe6 from "../../../assets/suckhoe/ktrasuckhoe6.png";
import avatar from "../../../assets/avatar.jpg";
import imageck1 from "../../../assets/chuyenkhoa/dakhoa.png";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { FaUserLarge } from "react-icons/fa6";
import { toast } from "react-toastify";
import useClickOutSide from "components/hooks/useClickOutSide";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  fetchAllCategories,
  fetchAllSpecialties,
  getUserID,
} from "service/UserService";
import { FaUserAlt } from "react-icons/fa";
import { UpdateContext } from "context/UpdateContext";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSearch,
  updateServiceID,
  updateServiceName,
} from "redux/userSlice";
const Header = () => {
  const { update, setUpdate } = useContext(UpdateContext);
  // const [updateImage, setUpdateImage] = useState(false);
  const [user, setUser] = useState([]);
  const [account, setAccount] = useState([]);
  // const [image, setImage] = useState("");
  // const [userName, setUserName] = useState("");
  const [value, setValue] = useState("");
  const { show, setShow, nodeRef } = useClickOutSide();
  const [specialty, setSpecialty] = useState([]);
  const [categories, setCategories] = useState([]);
  const state = useSelector((state) => state.user.changing);
  console.log(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    const updatedSearch = {
      search: `${value}`,
    };
    if (e.key === "Enter") {
      navigate(`/search`);
      dispatch(updateSearch(updatedSearch));
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    navigate("/");
    toast.success("Đăng xuất thành công!");
  };
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  const getAccount = () => {
    const account = localStorage.getItem("account");
    if (account) {
      setAccount(JSON.parse(account));
    }
  };
  const getUserByID = async () => {
    let res = await getUserID(user?.user?.id);
    if (res) {
      console.log(res);
      // setUserName(res?.name);
      // setImage(res?.account?.avatar);
    }
  };
  const getSpecialty = async () => {
    let res = await fetchAllSpecialties(6, 0);
    if (res) {
      setSpecialty(res?.results);
    }
  };
  const getService = async () => {
    let res = await fetchAllCategories(6, 0);
    if (res) {
      setCategories(res?.results);
    }
  };
  useEffect(() => {
    getSpecialty();
    getUser();
    getService();
    getUserByID();
    getAccount();
  }, []);
  // useEffect(() => {
  //   getUser();
  //   getUserByID();
  // }, [updateImage]);
  useEffect(() => {
    getUser();
    getAccount();
    // getUserByID();
  }, [state]);
  return (
    <div>
      <header className="HeaderContainer flex-center">
        <a className="HeaderLogoContainer" href="/">
          <img src={logo} alt="Logo" id="HeaderLogo"></img>
        </a>
        <div className="HeaderSearchContainer">
          <div className="HeaderSearchIcon flex-center">
            <FaSistrix />
          </div>
          <div className="HeaderSearchInput flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              id="HeaderSearch"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="HeaderCategoryContainer">
          <ul className="HeaderListCategory flex-center clear">
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <Link
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Chuyên mục
                </Link>
                <ul
                  class="dropdown-menu dropdown__menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div class="dropdown-item dropdown_title">
                      Chuyên mục sức khỏe
                    </div>
                  </li>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setUpdate(!update);
                          }}
                        >
                          <Link
                            class="dropdown-item d-flex align-items-center dropdown__item"
                            to={`/category/${item.id}/${item.name}`}
                          >
                            <div className="header__menu_image">
                              <img src={item?.icon || imageChuyenMuc1} alt="" />
                            </div>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}

                  <li>
                    <a className="header__menu_link" href="/categories">
                      <p>Xem tất cả chuyên mục</p>
                      <div>
                        <MdKeyboardArrowRight></MdKeyboardArrowRight>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="HeaderArrow">
                  <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
              </div>
            </li>
            {/* <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <Link
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Kiểm tra sức khoẻ
                </Link>
                <ul
                  class="dropdown-menu dropdown__menu2"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div class="dropdown-item dropdown_title">
                      Công cụ sức khỏe
                    </div>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe1} alt="" />
                      </div>
                      <span>Biểu đồ tăng trưởng của trẻ em</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe2} alt="" />
                      </div>
                      <span>Công cụ kiểm tra tiêm phòng vắc-xin HPV</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe3} alt="" />
                      </div>
                      <span>Công cụ gợi ý tiêm chủng cho người lớn</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe4} alt="" />
                      </div>
                      <span>Sàng lọc ung thư cổ tử cung</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe5} alt="" />
                      </div>
                      <span>Sàng lọc xác định giai đoạn mãn kinh của bạn</span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item d-flex align-items-center dropdown__item">
                      <div className="header__menu_image">
                        <img src={imageskhoe6} alt="" />
                      </div>
                      <span>Công cụ sàng lọc tầm soát bệnh tim mạch</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="header__menu_link"
                      href="/categories"
                      style={{ paddingLeft: "47px" }}
                    >
                      <p>Xem tất cả công cụ</p>
                      <div>
                        <MdKeyboardArrowRight></MdKeyboardArrowRight>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="HeaderArrow">
                  <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
              </div>
            </li> */}
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <Link
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Đặt lịch với bác sĩ
                </Link>
                <ul
                  class="dropdown-menu dropdown__menu3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div class="dropdown-item dropdown_title">
                      Các chuyên khoa
                    </div>
                  </li>
                  {specialty &&
                    specialty.length > 0 &&
                    specialty.map((item, index) => {
                      return (
                        <li
                          onClick={() => {
                            setUpdate(!update);
                            const updateName = {
                              serviceName: `${item?.name}`,
                            };
                            const updateId = {
                              serviceId: `${item?.id}`,
                            };
                            dispatch(updateServiceName(updateName));
                            dispatch(updateServiceID(updateId));
                          }}
                        >
                          <Link
                            class="dropdown-item d-flex align-items-center dropdown__item"
                            to={`/care/search`}
                            key={index}
                          >
                            <div className="header__menu_image">
                              <img src={item?.icon || imageck1} alt="" />
                            </div>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  <li>
                    <a
                      className="header__menu_link"
                      href="/care/specialties"
                      style={{ paddingLeft: "30px" }}
                    >
                      <p>Tất cả chuyên khoa</p>
                      <div>
                        <MdKeyboardArrowRight></MdKeyboardArrowRight>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="HeaderArrow">
                  <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {localStorage.getItem("user") ? (
          <div className="HeaderDropdown" ref={nodeRef}>
            <div className="HeaderUser flex-center">
              <Link
                onClick={() => {
                  setShow(!show);
                  // setUpdateImage(!updateImage);
                }}
              >
                <img src={account?.avatar || avatar} alt="" />
              </Link>
            </div>
            {show && (
              <div className="HeaderItem">
                <div className="HeaderItem__user">
                  <div className="HeaderItem__user_avt">
                    <img src={account?.avatar || avatar} alt="" />
                  </div>
                  <div className="HeaderItem__user_name">
                    <h6>{user?.name || "Họ và tên"}</h6>
                    <p>{user?.account?.username}</p>
                  </div>
                </div>
                <div className="HeaderItem__list row">
                  <Link
                    to={`/user/information/${user?.id}`}
                    className="HeaderItem__list_item col-6"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="HeaderItem__list_item_icon">
                      <FaUserAlt></FaUserAlt>
                    </div>
                    <p>Hồ sơ</p>
                  </Link>
                  <Link
                    to={`/user/changePassword/${user?.id}`}
                    className="HeaderItem__list_item col-6"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="HeaderItem__list_item_icon">
                      <RiLockPasswordFill></RiLockPasswordFill>
                    </div>
                    <p>Đổi mật khẩu</p>
                  </Link>
                  <a
                    href="/user/history"
                    className="HeaderItem__list_item col-6"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="HeaderItem__list_item_icon">
                      <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    <p>Lịch sử hẹn</p>
                  </a>
                  <a
                    href="/user/help"
                    className="HeaderItem__list_item col-6"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <div className="HeaderItem__list_item_icon">
                      <BiSolidHelpCircle></BiSolidHelpCircle>
                    </div>
                    <p>Trợ giúp</p>
                  </a>
                </div>
                <button className="HeaderItem__button" onClick={handleLogout}>
                  <span>
                    <div className="HeaderItem__button_icon">
                      <AiOutlineLogout></AiOutlineLogout>
                    </div>
                    <p>Đăng xuất</p>
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="HeaderUserContainer flex-center">
            <Link to={"/login"} className="LoginButtonContainer bold">
              Đăng nhập
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
