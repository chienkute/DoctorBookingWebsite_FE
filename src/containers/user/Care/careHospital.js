import { useNavigate } from "react-router-dom";
import hospitalImgaes from "../../../assets/hospital.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fetchAllHospital } from "service/UserService";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "context/LoadingContext";

const CareHospital = () => {
  const { setLoading } = useContext(LoadingContext);
  const [hospital, setHospital] = useState([]);
  console.log(hospital);
  const navigate = useNavigate();
  const getAllHospital = async () => {
    let res = await fetchAllHospital();
    if (res) {
      setHospital(res.results);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllHospital();
  }, []);
  return (
    <div className="care__hospital">
      <div className="care__hospital_banner">
        <h2>Top Bệnh viện/Phòng Khám Nổi Bật</h2>
        <a href="/care/searchDoctor">
          <p>Xem tất cả</p>
          <div>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </div>
        </a>
        <div className="care__hospital_container">
          <div className="row">
            {hospital &&
              hospital.length > 0 &&
              hospital.slice(0, 9).map((item, index) => {
                return (
                  <div className="col-6 care__hospital_item" key={index}>
                    <div>
                      <img
                        src={item?.account?.avatar || hospitalImgaes}
                        alt=""
                      />
                    </div>
                    <div className="care__hospital_name">{item.name}</div>
                    <div className="care__hospital_address">
                      <div>
                        <CiLocationOn></CiLocationOn>
                      </div>
                      <p>{item?.address || "địa chỉ"}</p>
                    </div>
                    <button
                      type="button"
                      class="btn button care__hospital_button"
                      onClick={() => {
                        navigate(`/care/hospital/${item.id}/${item.name}`);
                      }}
                    >
                      Đặt lịch bệnh viện
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareHospital;
