import { memo } from "react";
import "../Care/care.scss";
import { FaLocationDot } from "react-icons/fa6";
const care = () => {
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
            <div className="care__banner_input flex-center">
              <input
                type="text"
                placeholder="Vị trí hiện tại"
                id="care__in"
              ></input>
            </div>
          </div>
          <div className="care__banner_button">
            <div className="care__banner_input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                id="care__ins"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(care);
