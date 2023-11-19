import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import useClickOutSide from "../../../../components/hooks/useClickOutSide";
import dakhoaImages from "../../../../assets/chuyenkhoa/dakhoa.png";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbBuildingHospital } from "react-icons/tb";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { searchAll } from "service/UserService";
import { useDebounce } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
const CareSearch = () => {
  const navigate = useNavigate();
  const { show, setShow, nodeRef } = useClickOutSide();
  const [query, setQuery] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const hospitalSlice = hospital.slice(0, 3);
  const [adress, setAdress] = useState("");
  const [search, setSearch] = useState([]);
  const [specialty, setSpecialty] = useState(null);
  const [service, setService] = useState(null);
  const debouncedSearchTerm = useDebounce(query, 500);
  useEffect(() => {
    const search = async () => {
      if (debouncedSearchTerm) {
        let res = await searchAll(debouncedSearchTerm, adress);
        setSearch(res);
        setDoctor(res.doctors);
        setHospital(res.hospitals);
      }
    };
    search();
  }, [debouncedSearchTerm, adress]);
  const handleClickAdress = (e) => {
    const pValue = e.currentTarget.querySelector("p").innerText;
    setAdress(pValue);
  };
  const provinces = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hòa",
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
            aria-expanded="true"
            value={`${adress}`}
          ></input>
          <ul class="dropdown-menu care__banner_menu" aria-labelledby="care_in">
            {provinces.map((province, index) => (
              <li key={index}>
                <a
                  class="dropdown-item care__banner_menu_title"
                  onClick={handleClickAdress}
                >
                  <div>
                    <FaLocationDot></FaLocationDot>
                  </div>
                  <p>{province}</p>
                </a>
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
                  <div className="row">
                    <a href="/" className="col-2 care__banner_menus_item_col">
                      <div>
                        <img src={dakhoaImages} alt="" />
                      </div>
                      <p>Da khoa</p>
                    </a>
                  </div>
                  {/* <a href="/searchDoctor">Xem Thêm <Chuy></Chuy>ên Khoa</a> */}
                </div>
              </li>
              <li>
                <div className="care__banner_menus_header">
                  <div>
                    <MdOutlineMedicalServices></MdOutlineMedicalServices>
                  </div>
                  <p>Dịch vụ</p>
                  <a href="/serviceSearch">Xem tất cả</a>
                </div>
                <div className="care__banner_menus_item">
                  <div className="row">
                    <a href="/" className="col-2 care__banner_menus_item_col">
                      <div>
                        <img src={dakhoaImages} alt="" />
                      </div>
                      <p>Đa khoa</p>
                    </a>
                    <a href="/" className="col-2 care__banner_menus_item_col">
                      <div>
                        <img src={dakhoaImages} alt="" />
                      </div>
                      <p>Đa khoa</p>
                    </a>
                    <a href="/" className="col-2 care__banner_menus_item_col">
                      <div>
                        <img src={dakhoaImages} alt="" />
                      </div>
                      <p>Đa khoa</p>
                    </a>
                    <a href="/" className="col-2 care__banner_menus_item_col">
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
                  <a href="/searchDoctor">Xem tất cả</a>
                </div>
                <div className="care__banner_menus_item">
                  <div className="row">
                    {hospital &&
                      hospital.length > 0 &&
                      hospitalSlice.map((item, index) => {
                        return (
                          <a
                            href="/"
                            className="col-2 care__banner_menus_item_col"
                          >
                            <div>
                              <img src={dakhoaImages} alt="" />
                            </div>
                            <p>{item.name}</p>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </li>
              <li>
                <div className="care__banner_menus_header">
                  <div>
                    <FaUserDoctor></FaUserDoctor>
                  </div>
                  <p>Bác sĩ</p>
                  <a href="/searchDoctor">Xem tất cả</a>
                </div>
                <div className="care__banner_menus_item">
                  <div className="row">
                    {doctor &&
                      doctor.length > 0 &&
                      doctor.map((item, index) => {
                        return (
                          <a
                            className="col-2 care__banner_menus_item_col"
                            onClick={() => {
                              navigate(`/care/doctor/${item.id}`);
                            }}
                            role="button"
                          >
                            <div>
                              <img src={dakhoaImages} alt="" />
                            </div>
                            <p>{item.name}</p>
                          </a>
                        );
                      })}
                  </div>
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
