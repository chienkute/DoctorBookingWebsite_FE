import { memo } from "react";
import CareSearch from "./careSearchMenu/careSearch";
import CareHospital from "./careHospital";
const Care = () => {
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
        <CareSearch></CareSearch>
      </div>
      <CareHospital></CareHospital>
    </div>
  );
};
export default memo(Care);
