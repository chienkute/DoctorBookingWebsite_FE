import { memo, useContext, useEffect, useState } from "react";
import "./confirm.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import avtImage from "../../../assets/avatar.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Booking, getDoctorByID, getUserID } from "service/UserService";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { LoadingContext } from "context/LoadingContext";
const Confirm = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { schedule, day, time, days, idUser } = location.state;
  const [doctor, setDoctor] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);
  const book = async () => {
    let res = await Booking(id, schedule, day, time);
    if (res) {
      toast.success("Đặt lịch thành công");
      navigate(`/care/doctor/${id}`);
      console.log(res);
    } else {
      toast.error("Lịch đã bị đặt từ trước");
      navigate(`/care/doctor/${id}`);
    }
  };
  const getDoctor = async () => {
    let res = await getDoctorByID(id);
    if (res && res?.name) {
      setDoctor(res);
      setLoading(false);
    }
  };
  const getUserByID = async () => {
    let res = await getUserID(idUser);
    if (res && res?.phone) {
      setLoading(false);
      setUserInfo(res);
    }
  };
  useEffect(() => {
    getDoctor();
    getUserByID();
    setLoading(true);
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
                    <p>{userInfo?.name || "-------"}</p>
                    <div className="confirm__infor_content_header_text2">
                      {userInfo?.gender ? <p>Nam</p> : <p>Nữ</p>}
                      <div className="dot"></div>
                      <p>
                        {userInfo?.birthday ? (
                          <Moment format="DD/MM/YYYY">
                            {userInfo?.birthday}
                          </Moment>
                        ) : (
                          <p>-------</p>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirm__infor_content_footer">
                  <div className="confirm__infor_content_footer_text">
                    <div className="confirm__infor_footer_icon">
                      <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <p className="confirm__infor_footer_text">
                      Số điện thoại :
                    </p>
                    <p>{userInfo?.phone || "-------"}</p>
                  </div>
                  <div className="confirm__infor_content_footer_text">
                    <div className="confirm__infor_footer_icon">
                      <MdEmail></MdEmail>
                    </div>
                    <p className="confirm__infor_footer_text">Email :</p>
                    <p>{userInfo?.account?.email || "--------"}</p>
                  </div>
                  <div className="confirm__infor_content_footer_warning">
                    <div className="confirm__infor_content_footer_warning_icon">
                      <RiErrorWarningFill></RiErrorWarningFill>
                    </div>
                    <div className="confirm__infor_content_footer_warning_text">
                      <div className="confirm__infor_content_footer_warning_text1">
                        Vui lòng kiểm tra kỹ số điện thoại và email của bạn
                        trước khi đặt lịch.
                      </div>
                      <p>
                        Nếu số điện thoại của bạn hết hạn, vui lòng cập nhật
                        trong Hồ sơ người dùng; nếu email hết hạn, xin vui lòng
                        đăng ký một tài khoản mới. Sau đó bạn có thể đặt chỗ khi
                        đã cập nhật xong.
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
                    <p>{doctor?.name || "-------"}</p>
                    <div className="confirm__schedule_content_header_text2">
                      {doctor?.specialties &&
                        doctor?.specialties.map((item, index) => {
                          return <p>{item?.specialty?.name}</p>;
                        })}
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
                          Thứ {days || ""},
                          {day ? (
                            <Moment
                              format="DD/MM/YYYY"
                              className="moment__text"
                            >
                              {day}
                            </Moment>
                          ) : (
                            <p>------</p>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="confirm__schedule_footer_text">
                      <div className="confirm__schedule_footer_icon">
                        <FaLocationDot></FaLocationDot>
                      </div>
                      <div className="confirm__schedule_footer_info">
                        <p className="confirm__schedule_footer_info_text">
                          {doctor?.hospital?.name || "------"}
                        </p>
                        <p className="confirm__schedule_footer_info_text1">
                          {doctor?.hospital?.address || "------"}
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
              <button
                type="button"
                class="btn button"
                onClick={() => {
                  navigate(`/care/doctor/${id}`);
                }}
              >
                Hủy
              </button>
              <button type="button" class="btn button" onClick={book}>
                Xác nhận lịch hẹn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(Confirm);
