import { memo } from "react";
import "./confirm.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import avtImage from "../../../assets/avatar.png";
const Confirm = () => {
  return (
    <div className="confirm">
      <div className="confirm__header">
        <div className="confirm__header_head">
          <a href="/care" className="confirm__header_head_text">
            Tìm kiếm
          </a>
          <div className="confirm__header_head_icon">
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </div>
          <a href="/care/doctor" className="confirm__header_head_text">
            BS. Phạm Sĩ Chiến
          </a>
          <div className="confirm__header_head_icon">
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </div>
          <a href="/confirm" className="confirm__header_head_text2">
            <p>Đặt lịch hẹn</p>
          </a>
        </div>
      </div>
      <div className="confirm__main">
        <div className="confirm__infor">
          <h6>Thông tin người đặt</h6>
          <div className="confirm__infor_content">
            <div className="confirm__infor_content_header">
              <div className="confirm__infor_content_header_image">
                <img src={avtImage} alt="" />
              </div>
              <div className="confirm__infor_content_header_text">
                <p>Phạm Sĩ Chiến</p>
                <div className="confirm__infor_content_header_text2">
                  <p>Nam</p>
                  <div className="dot"></div>
                  <p>17/02/2002</p>
                </div>
              </div>
            </div>
            <div className="confirm__infor_content_footer">
              <div className="confirm__infor_content_footer_text">
                <div className="confirm__infor_footer_icon">
                  <FaPhoneAlt></FaPhoneAlt>
                </div>
                <p className="confirm__infor_footer_text">Số điện thoại :</p>
                <p>+84796862725</p>
              </div>
              <div className="confirm__infor_content_footer_text">
                <div className="confirm__infor_footer_icon">
                  <MdEmail></MdEmail>
                </div>
                <p className="confirm__infor_footer_text">Email :</p>
                <p>phamsichien112@gmail.com</p>
              </div>
              <div className="confirm__infor_content_footer_warning">
                <div className="confirm__infor_content_footer_warning_icon">
                  <RiErrorWarningFill></RiErrorWarningFill>
                </div>
                <div className="confirm__infor_content_footer_warning_text">
                  <div className="confirm__infor_content_footer_warning_text1">
                    Vui lòng kiểm tra kỹ số điện thoại và email của bạn trước
                    khi đặt lịch.
                  </div>
                  <p>
                    Nếu số điện thoại của bạn hết hạn, vui lòng cập nhật trong
                    Hồ sơ người dùng; nếu email hết hạn, xin vui lòng đăng ký
                    một tài khoản mới. Sau đó bạn có thể đặt chỗ khi đã cập nhật
                    xong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirm__schedule">
          <h6>Lịch hẹn của bạn</h6>
          <div className="confirm__schedule_content">
            <div className="confirm__schedule_content_header">
              <div className="confirm__schedule_content_header_image">
                <img src={avtImage} alt="" />
              </div>
              <div className="confirm__schedule_content_header_text">
                <p>BS. Nguyễn Thị Lý</p>
                <div className="confirm__schedule_content_header_text2">
                  Sản - Phụ khoa
                </div>
              </div>
            </div>
            <div className="confirm__schedule_content_footer">
              <p>NGÀY, THỜI GIAN & ĐỊA ĐIỂM</p>
              <div className="confirm__schedule_footer">
                <div className="confirm__schedule_footer_text">
                  <div className="confirm__schedule_footer_icon">
                    <FaClock></FaClock>
                  </div>
                  <div className="confirm__schedule_footer_info">
                    <p className="confirm__schedule_footer_info_text">
                      08:00 - 08:30
                    </p>
                    <p className="confirm__schedule_footer_info_text1">
                      Thứ 7, 18 thg 11, 2023
                    </p>
                  </div>
                </div>
                <div className="confirm__schedule_footer_text">
                  <div className="confirm__schedule_footer_icon">
                    <FaLocationDot></FaLocationDot>
                  </div>
                  <div className="confirm__schedule_footer_info">
                    <p className="confirm__schedule_footer_info_text">
                      Dr. Marie Đà Nẵng
                    </p>
                    <p className="confirm__schedule_footer_info_text1">
                      47 Lê Đình Lý, Quận Thanh Khê, Thành phố Đà Nẵng
                    </p>
                  </div>
                </div>
                <div className="confirm__schedule_footer_text">
                  <div className="confirm__schedule_footer_icon">
                    <BiSolidDollarCircle></BiSolidDollarCircle>
                  </div>
                  <div className="confirm__schedule_footer_info">
                    <p className="confirm__schedule_footer_info_text">
                      Phí tư vấn cố định
                    </p>
                    <p className="confirm__schedule_footer_info_price">
                      150.000 ₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirm__button">
          <button type="button" class="btn button">
            Xác nhận lịch hẹn
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Confirm);
