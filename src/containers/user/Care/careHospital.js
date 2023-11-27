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
      <h2>Top Bệnh viện/Phòng Khám Nổi Bật</h2>
      <a href="#">
        <p>Xem tất cả</p>
        <div>
          <MdKeyboardArrowRight></MdKeyboardArrowRight>
        </div>
      </a>
      <div>
        <div className="row">
          {hospital &&
            hospital.length > 0 &&
            hospital.map((item, index) => {
              return (
                <div className="col-6 care__hospital_item" key={index}>
                  <div>
                    <img src={hospitalImgaes} alt="" />
                  </div>
                  <div className="care__hospital_name">{item.name}</div>
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
                    onClick={() => {
                      navigate(`/care/hospital/${item.id}`);
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
  );
};
export default CareHospital;