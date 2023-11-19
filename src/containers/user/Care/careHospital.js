import { useNavigate } from "react-router-dom";
import hospitalImgaes from "../../../assets/hospital.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
const CareHospital = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/searchDoctor");
  };
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
          <div className="col-6 care__hospital_item">
            <div>
              <img src={hospitalImgaes} alt="" />
            </div>
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
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
            <div className="care__hospital_name">Bệnh viện Hoàn Mỹ Phúc 1</div>
            <div className="care__hospital_address">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
                1-3 Trịnh Văn Cấn, Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh,
                Vietnam
              </p>
            </div>
            <button type="button" class="btn button care__hospital_button">
              Đặt lịch bệnh viện
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareHospital;
