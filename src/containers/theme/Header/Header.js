import logo from "../../../assets/logo.png";
import React, { useContext } from "react";
import { FaSistrix } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import imageChuyenMuc1 from "../../../assets/chuyenmuc/medical.png";
import imageChuyenMuc2 from "../../../assets/chuyenmuc/tooth.png";
import imageChuyenMuc3 from "../../../assets/chuyenmuc/chuyenmuc3.png";
import imageChuyenMuc4 from "../../../assets/chuyenmuc/chuyenmuc4.png";
import imageChuyenMuc5 from "../../../assets/chuyenmuc/chuyenmuc5.png";
import imageChuyenMuc6 from "../../../assets/chuyenmuc/chuyenmuc6.png";
import imageskhoe1 from "../../../assets/suckhoe/kiemtraskhoe1.png";
import imageskhoe2 from "../../../assets/suckhoe/ktraskhoe2.png";
import imageskhoe3 from "../../../assets/suckhoe/ktrasuckhoe3.png";
import imageskhoe4 from "../../../assets/suckhoe/ktraskhoe4.png";
import imageskhoe5 from "../../../assets/suckhoe/ktrasuckhoe5.png";
import imageskhoe6 from "../../../assets/suckhoe/ktrasuckhoe6.png";
import imageck1 from "../../../assets/chuyenkhoa/dakhoa.png";
import imageck3 from "../../../assets/chuyenkhoa/dalieu.png";
import imageck4 from "../../../assets/chuyenkhoa/nhankhoa.png";
import imageck5 from "../../../assets/chuyenkhoa/phukhoa.png";
import imageck6 from "../../../assets/chuyenkhoa/cotsong.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { toast } from "react-toastify";
import useClickOutSide from "components/hooks/useClickOutSide";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { SearchContext } from "context/SearchContext";
import { FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const Header = () => {
  const { setSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      navigate("/search");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Log out success!");
  };
  const { show, setShow, nodeRef } = useClickOutSide();
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
            ></input>
          </div>
        </div>
        <div className="HeaderCategoryContainer">
          <ul className="HeaderListCategory flex-center clear">
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <a
                  href="#"
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Chuyên mục
                </a>
                <ul
                  class="dropdown-menu dropdown__menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div class="dropdown-item dropdown_title">
                      Chuyên mục sức khỏe
                    </div>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="/category"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc1} alt="" />
                      </div>
                      <span>Dược liệu</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc2} alt="" />
                      </div>
                      <span>Sức khỏe răng miệng</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc3} alt="" />
                      </div>
                      <span>Tâm lý - Tâm thần</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc4} alt="" />
                      </div>
                      <span>Thể dục thể thao</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc5} alt="" />
                      </div>
                      <span> Lão hóa lành mạnh</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc6} alt="" />
                      </div>
                      <span>Thói quen lành mạnh</span>
                    </a>
                  </li>
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
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <a
                  href="#"
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Kiểm tra sức khoẻ
                </a>
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
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe1} alt="" />
                      </div>
                      <span>Biểu đồ tăng trưởng của trẻ em</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe2} alt="" />
                      </div>
                      <span>Công cụ kiểm tra tiêm phòng vắc-xin HPV</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe3} alt="" />
                      </div>
                      <span>Công cụ gợi ý tiêm chủng cho người lớn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe4} alt="" />
                      </div>
                      <span>Sàng lọc ung thư cổ tử cung</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe5} alt="" />
                      </div>
                      <span>Sàng lọc xác định giai đoạn mãn kinh của bạn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageskhoe6} alt="" />
                      </div>
                      <span>Công cụ sàng lọc tầm soát bệnh tim mạch</span>
                    </a>
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
            </li>
            <li className="HeaderCategory">
              <div className="HeaderCategoryLink dropdown">
                <a
                  href="#"
                  className="bold"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="true"
                >
                  Đặt lịch với bác sĩ
                </a>{" "}
                <ul
                  class="dropdown-menu dropdown__menu3"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <div class="dropdown-item dropdown_title">
                      Các chuyên khoa
                    </div>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="/searchDoctor"
                    >
                      <div className="header__menu_image">
                        <img src={imageck1} alt="" />
                      </div>
                      <span>Đa khoa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageChuyenMuc2} alt="" />
                      </div>
                      <span>Nha khoa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageck3} alt="" />
                      </div>
                      <span>Da liễu</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageck4} alt="" />
                      </div>
                      <span>Nhãn khoa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageck5} alt="" />
                      </div>
                      <span>Sản - Phụ Khoa</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item d-flex align-items-center dropdown__item"
                      href="#"
                    >
                      <div className="header__menu_image">
                        <img src={imageck6} alt="" />
                      </div>
                      <span>Trị liệu thần kinh cột sống</span>
                    </a>
                  </li>
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
        {localStorage.getItem("token") ? (
          <div className="HeaderDropdown" ref={nodeRef}>
            <div className="HeaderUser flex-center">
              <a
                href="#"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <FaUserLarge></FaUserLarge>
              </a>
            </div>
            {show && (
              <div className="HeaderItem">
                <div className="HeaderItem__user">
                  <div className="HeaderItem__user_avt">
                    <FaUserLarge></FaUserLarge>
                  </div>
                  <div className="HeaderItem__user_name">
                    <h6>Phạm Sĩ Chiến</h6>
                    <a href="/user/information">Xem hồ sơ cá nhân</a>
                  </div>
                </div>
                <div className="HeaderItem__list row">
                  <a href="/user/" className="HeaderItem__list_item col-6">
                    <div className="HeaderItem__list_item_icon">
                      <FaHeartbeat></FaHeartbeat>
                    </div>
                    <p>Sức khỏe</p>
                  </a>
                  <a href="/user/" className="HeaderItem__list_item col-6">
                    <div className="HeaderItem__list_item_icon">
                      <RiLockPasswordFill></RiLockPasswordFill>
                    </div>
                    <p>Đổi mật khẩu</p>
                  </a>
                  <a
                    href="/user/history"
                    className="HeaderItem__list_item col-6"
                  >
                    <div className="HeaderItem__list_item_icon">
                      <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    <p>Lịch sử hẹn</p>
                  </a>
                  <a href="/user/" className="HeaderItem__list_item col-6">
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
