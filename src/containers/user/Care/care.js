import { memo, useState } from "react";
import "../Care/care.scss";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import useClickOutSide from "components/hooks/useClickOutSide";
import dakhoaImages from "../../../assets/chuyenkhoa/dakhoa.png";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbBuildingHospital } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import hospitalImgaes from "../../../assets/hospital.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Care = () => {
  const navigate = useNavigate();
  const { show, setShow, nodeRef } = useClickOutSide();
  const handleClick = () => {
    navigate("/searchDoctor");
  };
  return (
    <div className="care">
      <div className="care__banner">
        <div className="care__banner_info">
          <div className="care__banner_title">
            Đặt Lịch Thăm Khám Dễ Dàng Cùng Bác Sĩ
          </div>
          <div className="care__banner_text">
            Nền tảng hỗ trợ bệnh nhân tìm kiếm cơ sở y tế, bác sĩ và các dịch vụ
            phù hợp dù ở bất kỳ đâu
          </div>
        </div>
        <div className="care__banner_search">
          <div className="care__banner_button" style={{ width: "50%" }}>
            <div className="care__banner_icon">
              <FaLocationDot></FaLocationDot>
            </div>
            <div className="care__banner_input flex-center dropdown">
              <input
                type="text"
                placeholder="Vị trí hiện tại"
                id="care__in"
                data-mdb-toggle="dropdown"
                aria-expanded="true"
              ></input>
              <ul
                class="dropdown-menu care__banner_menu"
                aria-labelledby="care_in"
              >
                <li>
                  <a class="dropdown-item care__banner_menu_title">
                    <div>
                      <FaLocationDot></FaLocationDot>
                    </div>
                    <p>Đà Nẵng</p>
                  </a>
                  <div className="care__banner_menu_title_line"></div>
                </li>
                <li>
                  <a class="dropdown-item care__banner_menu_title">
                    <div>
                      <FaLocationDot></FaLocationDot>
                    </div>
                    <p>Hà Nội</p>
                  </a>
                  <div className="care__banner_menu_title_line"></div>
                </li>
                <li>
                  <a class="dropdown-item care__banner_menu_title">
                    <div>
                      <FaLocationDot></FaLocationDot>
                    </div>
                    <p>Hồ Chí Minh</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="care__banner_button d-flex" ref={nodeRef}>
            <div className="care__banner_input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                id="care__ins"
                onClick={() => {
                  setShow(!show);
                }}
              ></input>
            </div>
            {show && (
              <div className="care__banner_menus">
                <ul>
                  <li>
                    <div
                      className="care__banner_menus_header"
                      style={{ borderRadius: "6px" }}
                    >
                      <div>
                        <BiSolidCategory></BiSolidCategory>
                      </div>
                      <p>Chuyên khoa</p>
                      <a href="/care/specialties">Xem tất cả</a>
                    </div>
                    <div className="care__banner_menus_item">
                      <div className="row">
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                      </div>
                      <a href="/searchDoctor">Xem Thêm Chuyên Khoa</a>
                    </div>
                  </li>
                  <li>
                    <div className="care__banner_menus_header">
                      <div>
                        <MdOutlineMedicalServices></MdOutlineMedicalServices>
                      </div>
                      <p>Dịch vụ</p>
                      <a href="#">Xem tất cả</a>
                    </div>
                    <div className="care__banner_menus_item">
                      <div className="row">
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="care__banner_menus_header">
                      <div>
                        <TbBuildingHospital></TbBuildingHospital>
                      </div>
                      <p>Bệnh viện và Phòng khám</p>
                      <a href="#">Xem tất cả</a>
                    </div>
                    <div className="care__banner_menus_item">
                      <div className="row">
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="care__banner_menus_header">
                      <div>
                        <FaUserDoctor></FaUserDoctor>
                      </div>
                      <p>Bác sĩ</p>
                      <a href="#">Xem tất cả</a>
                    </div>
                    <div className="care__banner_menus_item">
                      <div className="row">
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                        <a
                          href="/"
                          className="col-2 care__banner_menus_item_col"
                        >
                          <div>
                            <img src={dakhoaImages} alt="" />
                          </div>
                          <p>Đa khoa</p>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="care__hospital">
        <h2>Top Bệnh viện/Phòng Khám Nổi Bật</h2>
        <a href="#">
          <p>Xem tất cả</p>
          <div>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </div>
        </a>
        <div>
          <div className="row">
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button
                type="button"
                class="btn button care__hospital_button"
                onClick={handleClick}
              >
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
            <div className="col-6 care__hospital_item">
              <div>
                <img src={hospitalImgaes} alt="" />
              </div>
              <div className="care__hospital_name">
                Bệnh viện Hoàn Mỹ Phúc 1
              </div>
              <div className="care__hospital_address">
                <div>
                  <CiLocationOn></CiLocationOn>
                </div>
                <p>
                  1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí
                  Minh, Vietnam
                </p>
              </div>
              <button type="button" class="btn button care__hospital_button">
                Đặt lịch bệnh viện
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Care);
