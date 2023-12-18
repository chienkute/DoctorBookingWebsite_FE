import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import useClickOutSide from "../../../../components/hooks/useClickOutSide";
import dakhoaImages from "../../../../assets/chuyenkhoa/dakhoa.png";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbBuildingHospital } from "react-icons/tb";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import {
  getDoctorByNameAddress,
  getHospitalByNameAddress,
  getServiceByNameAddress,
  getSpecialtyByNameAddress,
} from "service/UserService";
import { useDebounce } from "@uidotdev/usehooks";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const CareSearch = () => {
  const { show, setShow } = useClickOutSide();
  const [query, setQuery] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [adress, setAdress] = useState("");
  const [address, setAddress] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [service, setService] = useState("");
  const debouncedSearchTerm = useDebounce(query, 500);
  const [loadingSkeleton, SetLoadingSkeleton] = useState(true);
  const getDoctor = async () => {
    let res = await getDoctorByNameAddress(debouncedSearchTerm, adress);
    if (res) {
      SetLoadingSkeleton(true);
      setTimeout(() => {
        SetLoadingSkeleton(false);
      }, 1500);
      setDoctor(res?.results);
    }
  };
  const getHospital = async () => {
    let res = await getHospitalByNameAddress(debouncedSearchTerm, adress);
    if (res) {
      SetLoadingSkeleton(true);
      setTimeout(() => {
        SetLoadingSkeleton(false);
      }, 1500);
      setHospital(res?.results);
    }
  };
  const getService = async () => {
    let res = await getServiceByNameAddress(debouncedSearchTerm, adress);
    if (res) {
      SetLoadingSkeleton(true);
      setTimeout(() => {
        SetLoadingSkeleton(false);
      }, 1500);
      setService(res?.results);
    }
  };
  const getSpecialty = async () => {
    let res = await getSpecialtyByNameAddress(debouncedSearchTerm, adress);
    if (res) {
      SetLoadingSkeleton(true);
      setTimeout(() => {
        SetLoadingSkeleton(false);
      }, 1500);
      setSpecialty(res?.results);
    }
  };
  useEffect(() => {
    getDoctor();
    getHospital();
    getService();
    getSpecialty();
  }, [debouncedSearchTerm, adress]);
  useEffect(() => {
    SetLoadingSkeleton(true);
    setTimeout(() => {
      SetLoadingSkeleton(false);
    }, 1000);
  }, []);
  // const provinces = [
  //   "An Giang",
  //   "Bà Rịa - Vũng Tàu",
  //   "Bạc Liêu",
  //   "Bắc Giang",
  //   "Bắc Kạn",
  //   "Bắc Ninh",
  //   "Bến Tre",
  //   "Bình Định",
  //   "Bình Dương",
  //   "Bình Phước",
  //   "Bình Thuận",
  //   "Cà Mau",
  //   "Cần Thơ",
  //   "Cao Bằng",
  //   "Đà Nẵng",
  //   "Đắk Lắk",
  //   "Đắk Nông",
  //   "Điện Biên",
  //   "Đồng Nai",
  //   "Đồng Tháp",
  //   "Gia Lai",
  //   "Hà Giang",
  //   "Hà Nam",
  //   "Hà Nội",
  //   "Hà Tĩnh",
  //   "Hải Dương",
  //   "Hải Phòng",
  //   "Hậu Giang",
  //   "Hòa Bình",
  //   "Hưng Yên",
  //   "Khánh Hòa",
  //   "Kiên Giang",
  //   "Kon Tum",
  //   "Lai Châu",
  //   "Lâm Đồng",
  //   "Lạng Sơn",
  //   "Lào Cai",
  //   "Long An",
  //   "Nam Định",
  //   "Nghệ An",
  //   "Ninh Bình",
  //   "Ninh Thuận",
  //   "Phú Thọ",
  //   "Phú Yên",
  //   "Quảng Bình",
  //   "Quảng Nam",
  //   "Quảng Ngãi",
  //   "Quảng Ninh",
  //   "Quảng Trị",
  //   "Sóc Trăng",
  //   "Sơn La",
  //   "Tây Ninh",
  //   "Thái Bình",
  //   "Thái Nguyên",
  //   "Thanh Hóa",
  //   "Thừa Thiên Huế",
  //   "Tiền Giang",
  //   "TP Hồ Chí Minh",
  //   "Trà Vinh",
  //   "Tuyên Quang",
  //   "Vĩnh Long",
  //   "Vĩnh Phúc",
  //   "Yên Bái",
  // ];
  // const provincesWithValues = provinces.map((province) => {
  //   const value = province
  //     .toLowerCase() // Chuyển thành chữ thường
  //     .replace(/\s+/g, "") // Loại bỏ khoảng trắng
  //     .normalize("NFD") // Chuẩn hóa Unicode
  //     .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
  //     .replace(/đ/g, "d") // Thay thế "đ" thành "d"
  //     .replace(/(^|\s)\S/g, (char) => char.toUpperCase()); // Viết hoa chữ cái đầu

  //   return {
  //     value,
  //     label: province,
  //   };
  // });
  const province = [
    { value: "Danang", label: "Đà Nẵng" },
    { value: "Hanoi", label: "Hà Nội" },
    { value: "HoChiMinh", label: "Hồ Chí Minh" },
  ];
  return (
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
            value={`${address}`}
            autoComplete="off"
          ></input>
          <ul class="dropdown-menu care__banner_menu" aria-labelledby="care_in">
            <li>
              <Link
                class="dropdown-item care__banner_menu_title"
                onClick={(e) => {
                  const pValue = e.currentTarget.querySelector("p").innerText;
                  setAddress(pValue);
                  setAdress("");
                }}
              >
                <div>
                  <FaLocationDot></FaLocationDot>
                </div>
                <p>Tất cả vị trí</p>
              </Link>
              <div className="care__banner_menu_title_line"></div>
            </li>
            {province.map((province, index) => (
              <li key={index}>
                <Link
                  class="dropdown-item care__banner_menu_title"
                  onClick={() => {
                    setAdress(province.value);
                    setAddress(province.label);
                  }}
                >
                  <div>
                    <FaLocationDot></FaLocationDot>
                  </div>
                  <p>{province.label}</p>
                </Link>
                <div className="care__banner_menu_title_line"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="care__banner_button d-flex">
        <div className="care__banner_input flex-center">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            id="care__ins"
            onClick={(e) => {
              setShow(!show);
            }}
            onChange={(e) => {
              setQuery(e.target.value);
              setShow(true);
            }}
            autoComplete="off"
          />
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
                  {loadingSkeleton ? (
                    <div className="row">
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                    </div>
                  ) : (
                    <div className="row">
                      {specialty && specialty.length > 0 ? (
                        specialty.map((item, index) => {
                          return (
                            <Link
                              to={`/care/searchDoctor/${item.id}/${item.name}`}
                              className="col-2 care__banner_menus_item_col"
                              key={index}
                            >
                              <div>
                                {(
                                  <img
                                    src={item?.icon || dakhoaImages}
                                    alt=""
                                  />
                                ) || (
                                  <Skeleton
                                    width="30px"
                                    height="30px"
                                    style={{ transform: "translateY(-5px)" }}
                                    circle
                                    containerClassName="avatar-skeleton"
                                    enableAnimation={true}
                                  />
                                )}
                              </div>
                              <p>
                                {item.name || (
                                  <Skeleton
                                    width="100%"
                                    containerClassName="avatar-skeleton"
                                    count={1}
                                  />
                                )}
                              </p>
                            </Link>
                          );
                        })
                      ) : (
                        <div className="no-result"> Không có kết quả</div>
                      )}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="care__banner_menus_header">
                  <div>
                    <MdOutlineMedicalServices></MdOutlineMedicalServices>
                  </div>
                  <p>Dịch vụ</p>
                  <a href="/care/serviceSearch">Xem tất cả</a>
                </div>
                <div className="care__banner_menus_item">
                  {loadingSkeleton ? (
                    <div className="row">
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                    </div>
                  ) : (
                    <div className="row">
                      {service && service.length > 0 ? (
                        service.map((item, index) => {
                          return (
                            <a
                              href={`/care/service/${item.id}/${item.name}`}
                              className="col-2 care__banner_menus_item_col"
                              key={index}
                            >
                              <div>
                                {(
                                  <img
                                    src={item?.icon || dakhoaImages}
                                    alt=""
                                  />
                                ) || (
                                  <Skeleton
                                    width="30px"
                                    height="30px"
                                    style={{ transform: "translateY(-5px)" }}
                                    circle
                                    containerClassName="avatar-skeleton"
                                    enableAnimation={true}
                                  />
                                )}
                              </div>
                              <p>
                                {item.name || (
                                  <Skeleton
                                    width="100%"
                                    containerClassName="avatar-skeleton"
                                    count={1}
                                  />
                                )}
                              </p>
                            </a>
                          );
                        })
                      ) : (
                        <div className="no-result"> Không có kết quả</div>
                      )}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="care__banner_menus_header">
                  <div>
                    <TbBuildingHospital></TbBuildingHospital>
                  </div>
                  <p>Bệnh viện và Phòng khám</p>
                  <Link to={"/care/searchDoctor"}>Xem tất cả</Link>
                </div>
                <div className="care__banner_menus_item">
                  {loadingSkeleton ? (
                    <div className="row">
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                    </div>
                  ) : (
                    <div className="row">
                      {hospital && hospital.length > 0 ? (
                        hospital.map((item, index) => {
                          return (
                            <a
                              href={`/care/hospital/${item.id}/${item.name}`}
                              className="col-2 care__banner_menus_item_col"
                              key={index}
                            >
                              <div>
                                {(
                                  <img
                                    src={item?.account?.avatar || dakhoaImages}
                                    alt=""
                                  />
                                ) || (
                                  <Skeleton
                                    width="30px"
                                    height="30px"
                                    style={{ transform: "translateY(-5px)" }}
                                    circle
                                    containerClassName="avatar-skeleton"
                                    enableAnimation={true}
                                  />
                                )}
                              </div>
                              <p>
                                {item.name || (
                                  <Skeleton
                                    width="100%"
                                    containerClassName="avatar-skeleton"
                                    count={1}
                                  />
                                )}
                              </p>
                            </a>
                          );
                        })
                      ) : (
                        <div className="no-result"> Không có kết quả</div>
                      )}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="care__banner_menus_header">
                  <div>
                    <FaUserDoctor></FaUserDoctor>
                  </div>
                  <p>Bác sĩ</p>
                  <Link to={"/care/searchDoctor"}>Xem tất cả</Link>
                </div>
                <div className="care__banner_menus_item">
                  {loadingSkeleton ? (
                    <div className="row">
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                      <a href="/" className="col-2 care__banner_menus_item_col">
                        <div>
                          <Skeleton
                            height="32px"
                            width="32px"
                            circle
                            style={{ transform: "translateY(-6px)" }}
                          />
                        </div>
                        <p>
                          <Skeleton width="80px" height={"10px"} />
                        </p>
                      </a>
                    </div>
                  ) : (
                    <div className="row">
                      {doctor && doctor.length > 0 ? (
                        doctor.map((item, index) => {
                          return (
                            <a
                              href={`/care/doctor/${item.id}`}
                              className="col-2 care__banner_menus_item_col"
                              key={index}
                            >
                              <div>
                                {(
                                  <img
                                    src={item?.account?.avatar || dakhoaImages}
                                    alt=""
                                  />
                                ) || (
                                  <Skeleton
                                    width="30px"
                                    height="30px"
                                    style={{ transform: "translateY(-5px)" }}
                                    circle
                                    containerClassName="avatar-skeleton"
                                    enableAnimation={true}
                                  />
                                )}
                              </div>
                              <p>
                                {item.name || (
                                  <Skeleton
                                    width="100%"
                                    containerClassName="avatar-skeleton"
                                    count={1}
                                  />
                                )}
                              </p>
                            </a>
                          );
                        })
                      ) : (
                        <div className="no-result"> Không có kết quả</div>
                      )}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default CareSearch;
