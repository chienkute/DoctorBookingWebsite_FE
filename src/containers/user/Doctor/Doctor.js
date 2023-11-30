import React, { memo, useContext, useEffect, useState } from "react";
import "./Doctor.scss";
import AppointmentBox from "../AppointmentBox/AppointmentBox";
import avatar from "assets/avatar.png";
import banking from "assets/ck.png";
import VISA from "assets/VISA.jpg";
import { getDoctorByID } from "service/UserService";
import { useParams } from "react-router-dom";
import { LoadingContext } from "context/LoadingContext";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const Doctor = () => {
  const [doctor, setDoctor] = useState([]);
  const { id } = useParams();
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    getDoctor();
  }, []);
  const getDoctor = async () => {
    let res = await getDoctorByID(id);
    if (res && res?.name) {
      setLoading(false);
      setDoctor(res);
    }
  };
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
        <div className="DoctorPageContainer">
          <div className="DoctorPageHeader flex-center">
            <div className="Avatar">
              <img src={avatar} alt=""></img>
            </div>
            <div className="BasicInfo">
              <h4 className="bold">{doctor.name}</h4>
              <span>Khoa/Chuyên khoa</span>
              <div className="Tags">
                <ul className="ListTags clear">
                  <li className="Tag blue">
                    <div className="TagContent">Đặt lịch khám</div>
                  </li>
                  <li className="Tag orange">
                    <div className="TagContent">Tư vấn từ xa</div>
                  </li>
                  <li className="Tag">
                    <div className="TagContent">Dành cho trẻ em</div>
                  </li>
                  <li className="Tag">
                    <div className="TagContent">Dành cho người lớn</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="DoctorPageContent">
            <div className="DoctorInfo">
              <div className="DoctorHighlight">
                <div className="bold DoctorHighlightHeader">
                  Điểm nổi bật nhất
                </div>
                <div className="DoctorHighlightContent">
                  <ul className="ListHighlight">
                    <li className="Highlight">
                      <b>Thăm khám từ xa (Telemedicine):</b> Bác sĩ có nhận tư
                      vấn bệnh lý trực tuyến trên nền tảng Hibacsi.
                    </li>
                    <li className="Highlight">
                      <b>5 năm kinh nghiệm tư vấn, khám và điều trị đa khoa:</b>{" "}
                      Bác sĩ tốt nghiệp Bác sĩ đa khoa tại trường Đại học Y Dược
                      Cần Thơ, có hơn 5 năm kinh nghiệm trong việc thăm khám và
                      tư vấn.
                    </li>
                    <li className="Highlight">
                      <b>Nhiệt tình tư vấn trong thăm khám:</b> Bác sĩ luôn thăm
                      khám với thái độ tận tình tận tâm, nhiệt huyết trong quá
                      trình tư vấn bệnh lý.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="DoctorBasicInfo">
                <div className="Header">
                  <ul className="clear ListTab">
                    <li className="bold Tab selected">Thông tin cơ bản</li>
                    <li className="bold Tab">Đánh giá (0)</li>
                  </ul>
                </div>
                <div className="Content">
                  <div className="BasicInfo">
                    <div className="bold Header">Thông tin bác sĩ </div>
                    <p>
                      Bác sĩ Nguyễn Thanh Tâm có hơn 5 năm kinh nghiệm trong
                      việc thăm khám và điều trị các vấn đề bệnh lý đa khoa dành
                      cho cả trẻ em lẫn người lớn.
                    </p>
                    <p>
                      Sở hữu nền tảng chuyên môn vững chắc, bác sĩ tốt nghiệp
                      Bác sĩ đa khoa tại trường Đại học Y Dược Cần Thơ. Bên cạnh
                      đó, bác sĩ còn sở hữu các chứng chỉ về tim mạch, thường
                      xuyên tham gia các hội nghị khoa học của Hội Tim mạch Việt
                      Nam.
                    </p>
                    <p>
                      Hiện tại, bác sĩ chuyên thăm khám và điều trị các vấn đề
                      bệnh lý nội khoa, đa khoa, tư vấn tiêm chủng. Với tinh
                      thần trách nhiệm cao cũng như sự ân cần và chu đáo trong
                      việc tư vấn, khám, bác sĩ nhận được nhiều đánh giá tích
                      cực từ các bệnh nhân đến điều trị.
                    </p>
                  </div>
                  <div className="Strengths">
                    <div className="Header">
                      <div className="HeaderName">Thế mạnh chuyên môn</div>
                    </div>
                    <div className="Content">
                      <ul className="clear ListStrengthsTab">
                        <li className="Strengths">Tư vấn bệnh lí đa khoa</li>
                        <li className="Strengths">Tư vấn tiêm chủng</li>
                        <li className="Strengths">Bệnh lý Nội khoa</li>
                      </ul>
                    </div>
                  </div>
                  <div className="Services">
                    <div className="Header">
                      <div className="HeaderName">Dịch vụ</div>
                    </div>
                    <div className="Content">
                      <ul className="clear ListService">
                        <li className="Service">
                          <div className="ServiceHeader">
                            Tư vấn bệnh lí đa khoa
                          </div>
                          <div className="ServiceDetails">
                            Bác sĩ có nhận thăm khám, tư vấn bệnh lý đa khoa,
                            bệnh lý Nội khoa, tư vấn tiêm chủng theo hình thức
                            Telemedicine.
                          </div>
                          <div className="ServiceFee">
                            <span className="Icon">
                              <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                            </span>
                            <span>Phí tư vấn ban đầu từ</span>
                            <span className="Fee"> 150.000đ</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="History">
                    <div className="Experiences">
                      <div className="Header">
                        <div className="HeaderName">Kinh nghiệm làm việc</div>
                      </div>
                      <div className="Content">
                        <ul className="ListExperiences">
                          <li className="Experience">
                            <div className="ExperienceHeader">
                              Khám, tư vấn và điều trị nội trú và ngoại trú cho
                              người lớn và trẻ em
                            </div>
                            <div className="ExperienceDetails">
                              Trung tâm Y tế Tân Trụ
                            </div>
                            <div className="ExperienceDetails">
                              2019 - Hiện tại
                            </div>
                          </li>
                          <li className="Experience">
                            <div className="ExperienceHeader">
                              Khám sàng lọc và tư vấn, tiêm ngừa dịch vụ
                            </div>
                            <div className="ExperienceDetails">2022</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="Education">
                      <div className="Header">
                        <div className="HeaderName">Quá trình đào tạo</div>
                      </div>
                      <div className="Content">
                        <ul className="ListSchools">
                          <li className="School">
                            <div className="SchoolHeader">
                              Trường Đại học Y Dược Cần Thơ
                            </div>
                            <div className="SchoolDetails">
                              Tốt nghiệp Bác sĩ đa khoa
                            </div>
                            <div className="SchoolDetails">2015 - 2019</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="HospitalLocation">
                    <div className="bold Header">Thông tin bệnh viện</div>
                    <iframe
                      title="Map"
                      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15675.383782640081!2d106.629664!3d10.823099000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ5JzIzLjIiTiAxMDbCsDM3JzQ2LjgiRQ!5e0!3m2!1sen!2sus!4v1699429489519!5m2!1sen!2sus"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="HospitalInfo">
                      <div className="HospitalName">
                        Phòng khám Đa khoa trực tuyến BS. Nguyễn Thanh Tâm
                      </div>
                      <div className="HospitalDetails">
                        Ho Chi Minh, Ho Chi Minh City, Vietnam
                      </div>
                    </div>
                  </div>
                  <div className="WorkTime">
                    <div className="Header">
                      <div className="HeaderName">Giờ làm việc</div>
                    </div>
                    <div className="Content">
                      <div className="content_container">
                        <div className="content_day">Thứ Hai </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Thứ Ba </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Thứ Tư </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Thứ Năm </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Thứ Sáu </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Thứ Bảy </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                      <div className="content_container">
                        <div className="content_day">Chủ Nhật </div>
                        <div className="content_time bold">
                          12:00 - 13:15, 17:00 - 21:00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="PaymentMethod">
                    <div className="Header">
                      <div className="HeaderName">Hình thức thanh toán</div>
                    </div>
                    <div className="Content">
                      <ul className="clear ListPaymentMethod">
                        <li className="Method">
                          <div className="flex-center MethodIcon">
                            <img src={VISA} alt="Icon"></img>
                          </div>
                          <div className="MethodDetails">Visa</div>
                        </li>
                        <li className="Method">
                          <div className="flex-center MethodIcon">
                            <img src={banking} alt="Icon"></img>
                          </div>
                          <div className="MethodDetails">Chuyển khoản</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="DoctorPageAppointmentBox">
              <AppointmentBox id={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Doctor);
