import { memo, useContext } from "react";
import "../Service/service.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import serviceImg from "../../../assets/service.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import chuyenkhoan from "../../../assets/ck.png";
import tienmat from "../../../assets/tienmat.png";
import { LoadingContext } from "context/LoadingContext";
import { getServiceById } from "service/UserService";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Service = () => {
  const { id, nameservice } = useParams();
  const { loading, setLoading } = useContext(LoadingContext);
  const [service, setService] = useState([]);
  const getService = async () => {
    let res = await getServiceById(id);
    if (res) {
      setLoading(false);
      setService(res);
    }
  };
  useEffect(() => {
    getService();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="lds lds-doctor">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="service">
          <div className="service__header">
            <div className="service__header_head">
              <a href="/care" className="service__header_head_text">
                Tìm kiếm
              </a>
              <div className="service__header_head_icon">
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </div>
              <a href="/service" className="service__header_head_text2">
                <p>{nameservice || "...."}</p>
              </a>
            </div>
          </div>
          <div className="service__main">
            <div className="service__main_header">
              <div className="service__main_header_img">
                <img src={service?.icon || serviceImg} alt="" />
              </div>
              <div className="service__main_header_text">
                <h1>{service?.name}</h1>
                <div className="service__main_header_text_price">
                  <div className="service__main_header_text_price_icon">
                    <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                  </div>
                  <span>926.500 (Giá dịch vụ)</span>
                </div>
              </div>
            </div>
            <div className="service__body">
              <div className="service__main_body">
                <div className="service__main_body_title">
                  <p>Thông tin cơ bản</p>
                </div>
                <div className="service__main_body_line"></div>
                <div className="service__main_body_info">
                  <div className="servicehead">
                    <h2>Về dịch vụ</h2>
                  </div>
                  <span>{service?.descripe || "Mô tả về dịch vụ"}</span>
                </div>
                <div className="service__main_body_hour">
                  <div className="servicehead">
                    <h2>Giờ làm việc</h2>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Hai</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Ba</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Tư</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Năm</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Sáu</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Thứ Bảy</p>
                    <p className="bolds">8:00 - 17:00</p>
                  </div>
                  <div className="service__main_body_time">
                    <p>Chủ Nhật</p>
                    <p className="bolds">Đóng cửa</p>
                  </div>
                </div>
                <div>
                  <div className="servicehead">
                    <h2>Hình thức thanh toán</h2>
                  </div>
                  <div className="service__main_body_thanhtoan">
                    <div className="service__main_body_phuongthuc">
                      <div className="service__main_body_img">
                        <img src={chuyenkhoan} alt="" />
                      </div>
                      <p>Chuyển khoản</p>
                    </div>
                    <div className="service__main_body_phuongthuc">
                      <div className="service__main_body_img">
                        <img src={tienmat} alt="" />
                      </div>
                      <p>Tiền mặt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(Service);
