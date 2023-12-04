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
import imageck1 from "../../../assets/chuyenkhoa/dakhoa.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { toast } from "react-toastify";
import useClickOutSide from "components/hooks/useClickOutSide";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { SearchContext } from "context/SearchContext";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  fetchAllCategories,
  fetchAllSpecialties,
  getUserID,
} from "service/UserService";
import { FaUserAlt } from "react-icons/fa";
import { UpdateContext } from "context/UpdateContext";
const Header = () => {
  const { setSearch } = useContext(SearchContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const [user, setUser] = useState([]);
  console.log(user);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
    getUserByID();
  }, [update]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      navigate("/search");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    toast.success("Đăng xuất thành công!");
  };
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  const getUserByID = async () => {
    let res = await getUserID(user?.user?.id);
    if (res) {
      console.log(res);
      setUserName(res?.name);
    }
  };
  const { show, setShow, nodeRef } = useClickOutSide();
  const [specialty, setSpecialty] = useState([]);
  const [categories, setCategories] = useState([]);
  const specialtySlice = specialty.slice(0, 5);
  const getSpecialty = async () => {
    let res = await fetchAllSpecialties();
    if (res) {
      setSpecialty(res?.results);
    }
  };
  const getService = async () => {
    let res = await fetchAllCategories(1);
    if (res) {
      setCategories(res?.results);
    }
  };
  useEffect(() => {
    getSpecialty();
    getUser();
    getService();
    getUserByID();
  }, []);
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
                              <img src={imageChuyenMuc1} alt="" />
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
                  {specialtySlice &&
                    specialtySlice.length > 0 &&
                    specialtySlice.map((item, index) => {
                      return (
                        <li
                          onClick={() => {
                            setUpdate(!update);
                          }}
                        >
                          <Link
                            class="dropdown-item d-flex align-items-center dropdown__item"
                            to={`/care/searchDoctor/${item.id}/${item.name}`}
                            key={index}
                          >
                            <div className="header__menu_image">
                              <img src={imageck1} alt="" />
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
                  setUpdate(!update);
                }}
              >
                <FaUserLarge></FaUserLarge>
              </Link>
            </div>
            {show && (
              <div className="HeaderItem">
                <div className="HeaderItem__user">
                  <div className="HeaderItem__user_avt">
                    <FaUserLarge></FaUserLarge>
                  </div>
                  <div className="HeaderItem__user_name">
                    <h6>{userName || "Họ và tên"}</h6>
                    <p>{user?.account?.username}</p>
                  </div>
                </div>
                <div className="HeaderItem__list row">
                  <Link
                    to={`/user/information/${user?.user?.id}`}
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
                    to={`/user/changePassword/${user?.user?.id}`}
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
