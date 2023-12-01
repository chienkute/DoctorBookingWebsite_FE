import { React, useEffect, useState } from "react";
import "./AppointmentBox.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../../user/AppointmentBox/AppointmentBox.scss";
import { scheduleDoctor } from "service/UserService";
import moment from "moment";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Tab, Tabs } from "react-bootstrap";
const AppointmentBox = (props) => {
  const [loadingBook, setLoadingBook] = useState(true);
  const [timeMorning, setTimeMorning] = useState([]);
  const [timeAfternoon, setTimeAfternoon] = useState([]);
  const [timeNight, setTimeNight] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedSpecialtys, setSelectedSpecialtys] = useState(null);
  const [idSchedule, setIdSchedule] = useState(null);
  const [days, setDay] = useState("");
  console.log(days);
  const [formattedDate, setFormattedDate] = useState("");
  const [dayMonth, setDayMonth] = useState([]);
  const time = "";
  const [user, setUser] = useState([]);
  const [showButton, setShowbutton] = useState(false);
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  const handleSpecialtyClick = (index) => {
    setSelectedSpecialty(index);
  };
  const handleDays = (date) => {
    const formatted = moment(date, "YYYY-MM-DD").format("YYYY/MM/DD");
    setFormattedDate(formatted);
  };
  const handleSpecialtyClicks = (index) => {
    setSelectedSpecialtys(index);
  };
  const handleDay = (index) => {
    const dayName = dayMonth[index];

    const dayNumber = parseInt(dayName.replace("Thứ ", "")); // Lấy số từ tên thứ
    if (dayNumber) {
      setDay(dayNumber);
    } else {
      setDay(0);
    }const handleDay = (index) => {
      const dayName = dayMonth[index];
  
      const dayNumber = parseInt(dayName.replace("Thứ ", "")); // Lấy số từ tên thứ
      if (dayNumber) {
        setDay(dayNumber);
      } else {
        setDay(0);
      }
    };
  };
  const formatTime = (time) => {
    if (time) {
      const timeParts = time.split(":");
      return `${timeParts[0]}:${timeParts[1]}`;
    }
    return "";
  };
  const daysOfWeek = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const handleDayNow = () => {
    const todayIndex = moment().day();
    const currentDayIndex = todayIndex === 0 ? 7 : todayIndex;
    const nextDays = daysOfWeek
      .slice(currentDayIndex)
      .concat(daysOfWeek.slice(0, currentDayIndex));
    setDayMonth(nextDays);
  };
  const currentDate = new Date().toISOString().split("T")[0];
  const getIdSchedule = async () => {
    let res = await scheduleDoctor(props.id);
    if (res?.morning) {
      console.log(res);
      setLoadingBook(false);
      setTimeMorning(res?.morning);
      setTimeAfternoon(res?.afternoon);
      setTimeNight(res?.evening);
      console.log(timeMorning);
    }
  };
  useEffect(() => {
    getIdSchedule();
    handleDayNow();
    getUser();
  }, []);
  return (
    <div className="AppointmentBoxContainer">
      <div className="AppointmentBoxHeader">
        <div className="AppointmentMethod selected">Tư vấn trực tiếp</div>
      </div>
      <div className="AppointmentBoxContent">
        <div className="AppointmentDate">
          <div className="Header">Đặt lịch hẹn</div>
          <div className="DateQuickPicker">
            <input
              type="date"
              onChange={(e) => {
                handleDays(e.target.value);
              }}
              min={currentDate}
            />
          </div>
        </div>
        <div className="day">
          <div className="day__header">Lịch trống gần nhất</div>
          <div className="day__content row day-list">
            <Swiper
              modules={[Navigation, Pagination]}
              id="swiper"
              spaceBetween={10}
              slidesPerView={3}
              grabCursor={"true"}
              navigation
            >
              {dayMonth &&
                dayMonth.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div
                        className={`day__content_col col-md-2 ${
                          index === selectedSpecialtys ? "selects2" : ""
                        }`}
                        role="button"
                        onClick={() => {
                          handleDay(index);
                          handleSpecialtyClicks(index);
                        }}
                      >
                        <p className="day__content_dayOfWeek">{item}</p>
                        <p className="day__content_day">
                          {moment().add(index, "days").format("DD/MM")}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="AppointmentHourSelect">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 ListPartOfDay clear"
          >
            <Tab eventKey="home" title="Sáng" className="PartOfDay day-item">
              {loadingBook ? (
                <div className="lds-booking">
                  <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="text-loading">Đang lấy lịch hẹn</div>
                </div>
              ) : (
                <div>
                  {timeMorning.length > 0 ? (
                    <div className="ListTime morning">
                      {timeMorning &&
                        timeMorning.length > 0 &&
                        timeMorning.map((item, index) => {
                          if (item.days_of_week === days)
                            return (
                              <div
                                className={`Time selected ${
                                  index === selectedSpecialty ? "selects" : ""
                                }`}
                                role="button"
                                key={index}
                                onClick={() => {
                                  handleSpecialtyClick(index);
                                  setIdSchedule(item.id);
                                  setShowbutton(true);
                                }}
                              >
                                {formatTime(`${item?.start}`)} -{" "}
                                {formatTime(`${item?.end}`)}
                              </div>
                            );
                        })}
                    </div>
                  ) : (
                    <div className="appoinment__schedule">
                      <div className="no__schedule_icon">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                      </div>
                      <p> Lịch hẹn trống</p>
                    </div>
                  )}
                </div>
              )}
            </Tab>
            <Tab
              eventKey="schedule"
              title="Chiều"
              className="PartOfDay day-item"
            >
              {loadingBook ? (
                <div className="lds-booking">
                  <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="text-loading">Đang lấy lịch hẹn</div>
                </div>
              ) : (
                <div>
                  {timeAfternoon.length > 0 ? (
                    <div className="LisTime afternoon">
                      {timeAfternoon &&
                        timeAfternoon.map((item, index) => {
                          if (item.days_of_week === days)
                            return (
                              <div
                                className={`Time selected ${
                                  index === selectedSpecialty ? "selects" : ""
                                }`}
                                role="button"
                                key={index}
                                onClick={() => {
                                  handleSpecialtyClick(index);
                                  setIdSchedule(item.id);
                                  setShowbutton(true);
                                }}
                              >
                                {formatTime(`${item?.start}`)} -{" "}
                                {formatTime(`${item?.end}`)}
                              </div>
                            );
                        })}
                    </div>
                  ) : (
                    <div className="LisTime afternoon">
                      <div className="appoinment__schedule">
                        <div className="no__schedule_icon">
                          <FaRegCalendarAlt></FaRegCalendarAlt>
                        </div>
                        <p> Lịch hẹn trống</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Tab>
            <Tab eventKey="profile" title="Tối" className="PartOfDay day-item">
              {loadingBook ? (
                <div className="lds-booking">
                  <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="text-loading">Đang lấy lịch hẹn</div>
                </div>
              ) : (
                <div>
                  {" "}
                  {timeNight.length > 0 ? (
                    <div className="ListTime night">
                      {timeNight &&
                        timeNight.map((item, index) => {
                          if (item.days_of_week === days)
                            return (
                              <div
                                className={`Time selected ${
                                  index === selectedSpecialty ? "selects" : ""
                                }`}
                                role="button"
                                key={index}
                                onClick={() => {
                                  handleSpecialtyClick(index);
                                  setIdSchedule(item.id);
                                  setShowbutton(true);
                                }}
                              >
                                {formatTime(`${item?.start}`)} -{" "}
                                {formatTime(`${item?.end}`)}
                              </div>
                            );
                        })}
                    </div>
                  ) : (
                    <div className="ListTime night">
                      <div className="appoinment__schedule">
                        <div className="no__schedule_icon">
                          <FaRegCalendarAlt></FaRegCalendarAlt>
                        </div>
                        <p> Lịch hẹn trống</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Tab>
          </Tabs>
        </div>
        <div className="AppointmentFee">
          <span className="Icon">
            <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
          </span>
          <span>Phí tư vấn ban đầu từ</span>
          <span className="Fee"> 150.000đ</span>
        </div>
      </div>
      {localStorage.getItem("token") ? (
        <div className="AppointmentBoxButton">
          {showButton ? (
            <button>
              <Link
                to={`/care/doctor/confirm/${props.id}${props.name}`}
                state={{
                  schedule: `${idSchedule}`,
                  day: `${formattedDate}`,
                  time: `${time}`,
                  days: `${days}`,
                  idUser: `${user?.user?.id}`,
                }}
              >
                Tiếp tục đặt lịch
              </Link>
            </button>
          ) : (
            <button type="button" className="button-text">
              Tiếp tục đặt lịch
            </button>
          )}
        </div>
      ) : (
        <div className="AppointmentBoxButton">
          {showButton ? (
            <button>
              <Link to={"/login"}>Tiếp tục đặt lịch</Link>
            </button>
          ) : (
            <button type="button" className="button-text">
              Tiếp tục đặt lịch
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentBox;
