import { memo, useContext, useState } from "react";
import CareSearch from "./careSearchMenu/careSearch";
import CareHospital from "./careHospital";
import { LoadingContext } from "context/LoadingContext";
const Care = () => {
  const { loading } = useContext(LoadingContext);
  return (
    <div className="care">
      {loading && (
        <div className="lds lds-care">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
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
        <CareSearch loading={loading}></CareSearch>
      </div>
      <CareHospital></CareHospital>
    </div>
  );
};
export default memo(Care);
