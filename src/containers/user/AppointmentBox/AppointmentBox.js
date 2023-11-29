import { React, useEffect, useState } from "react";
import "./AppointmentBox.scss";
import icon from "assets/icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../../user/AppointmentBox/AppointmentBox.scss";
import { scheduleDoctor } from "service/UserService";
import moment from "moment";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
const AppointmentBox = (props) => {
  const [loadingBook, setLoadingBook] = useState(true);
  const [timeMorning, setTimeMorning] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedSpecialtys, setSelectedSpecialtys] = useState(null);
  const [idSchedule, setIdSchedule] = useState(null);
  const [days, setDay] = useState("");
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
  console.log(formattedDate);
  const handleSpecialtyClicks = (index) => {
    setSelectedSpecialtys(index);
  };
  const handleDay = (index) => {
    const dayName = dayMonth[index];
    const dayNumber = parseInt(dayName.replace("Thứ ", "")); // Lấy số từ tên thứ
    setDay(dayNumber);
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
    const todayIndex = moment().day(); // Lấy vị trí của ngày hiện tại trong tuần (0 là Chủ nhật)
    const currentDayIndex = todayIndex === 0 ? 7 : todayIndex; // Chuyển vị trí từ 0 (Chủ nhật) sang 7
    const nextDays = daysOfWeek
      .slice(currentDayIndex)
      .concat(daysOfWeek.slice(0, currentDayIndex));
    setDayMonth(nextDays);
  };
  const currentDate = new Date().toISOString().split("T")[0];
  const getIdSchedule = async () => {
    let res = await scheduleDoctor(props.id);
    if (res) {
      console.log(res);
      setLoadingBook(false);
      setTimeMorning(res?.morning);
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
          <ul
            class="nav nav-tabs mb-3 ListPartOfDay clear"
            id="ex1"
            role="tablist"
          >
            <li class="nav-item PartOfDay day-item" role="presentation">
              <a
                class="nav-link active"
                id="tab-morning"
                data-mdb-toggle="tab"
                href="#tabs-morning"
                role="tab"
                aria-controls="tabs-morning"
                aria-selected="true"
              >
                Sáng
              </a>
            </li>
            <li class="nav-item PartOfDay day-item" role="presentation">
              <a
                class="nav-link"
                id="tab-afternoon"
                data-mdb-toggle="tab"
                href="#tabs-afternoon"
                role="tab"
                aria-controls="tabs-afternoon"
                aria-selected="false"
              >
                Chiều
              </a>
            </li>
            <li class="nav-item PartOfDay day-item" role="presentation">
              <a
                class="nav-link nav-night hospital-night"
                id="tab-noon"
                data-mdb-toggle="tab"
                href="#tabs-noon"
                role="tab"
                aria-controls="tabs-noon"
                aria-selected="false"
              >
                Tối
              </a>
            </li>
          </ul>
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
            <div class="tab-content" id="ex2-content">
              <div
                class="tab-pane fade show active clear"
                id="tabs-morning"
                role="tabpanel"
                aria-labelledby="tab-morning"
              >
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
                  {timeMorning.length < 0 && (
                    <div className="appoinment__schedule">
                      <div className="no__schedule_icon">
                        <FaRegCalendarAlt></FaRegCalendarAlt>
                      </div>
                      <p> Lịch hẹn trống</p>
                    </div>
                  )}
                </div>
              </div>
              <div
                class="tab-pane fade show active clear"
                id="tabs-afternoon"
                role="tabpanel"
                aria-labelledby="tab-afternoon"
              >
                <div className="LisTime afternoon"></div>
              </div>
              <div
                class="tab-pane fade show active clear ListTime night"
                id="tabs-noon"
                role="tabpanel"
                aria-labelledby="tab-noon"
              >
                <div className="ListTime night"></div>
              </div>
            </div>
          )}
        </div>
        <div className="AppointmentFee">
          <span className="Icon">
            <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
          </span>
          <span>Phí tư vấn ban đầu từ</span>
          <span className="Fee"> 150.000đ</span>
        </div>
      </div>
      <div className="AppointmentBoxButton">
        {showButton ? (
          <button>
            <Link
              to={`/care/doctor/confirm/${props.id}`}
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
          <button type="button" disabled={true} className="button-text">
            Tiếp tục đặt lịch
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentBox;
