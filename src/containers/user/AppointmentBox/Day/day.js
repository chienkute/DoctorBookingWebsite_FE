import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../../AppointmentBox/AppointmentBox.scss";
import { useEffect, useState } from "react";
import { getSchedule, scheduleDoctor } from "service/UserService";
const Day = (props) => {
  const [time, setTime] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [scheduleId, setScheduleId] = useState(null);
  const handleSpecialtyClick = (index) => {
    setSelectedSpecialty(index);
  };
  console.log(props.id);
  // const getTime = () => {
  //   scheduleId.map(async (item, index) => {
  //     let res = await getSchedule(item.id);
  //     if (res) {
  //       setTime(res);
  //     }
  //   });
  //   console.log(time);
  // };
  const getIdSchedule = async () => {
    let res = await scheduleDoctor(props.id);
    if (res) {
      setScheduleId(res.results);
      console.log(res.results);
    }
  };
  useEffect(() => {
    // getTime();
    getIdSchedule();
  }, []);
  return (
    <div className="AppointmentBoxContent">
      <div className="AppointmentDate">
        <div className="Header">Đặt lịch hẹn</div>
        <div className="DateQuickPicker">
          <input type="datetime-local" />
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
            loop
          >
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="day__content_col col-md-2" role="button">
                <p className="day__content_dayOfWeek">Thứ 2</p>
                <p className="day__content_day">16/11</p>
              </div>
            </SwiperSlide>
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
              class="nav-link"
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
        <div class="tab-content" id="ex2-content">
          <div
            class="tab-pane fade show active clear ListTime"
            id="tabs-morning"
            role="tabpanel"
            aria-labelledby="tab-morning"
          >
            {/* {time &&
        time.map((item, index) => {
          return (
            <li
              className={`Time selected ${
                index === selectedSpecialty ? "select" : ""
              }`}
              role="button"
              key={item.id}
              onClick={() => {
                handleSpecialtyClick(index);
              }}
            >
              {item.start} - {item.end}
            </li>
          );
        })} */}
            <div className="Time selected" role="button">
              13:00 - 13:30
            </div>
            <div className="Time">13:30 - 14:00</div>
            <div className="Time">14:00 - 14:30</div>
            <div className="Time">14:30 - 15:00</div>
            <div className="Time">15:00 - 15:30</div>
          </div>
          <div
            class="tab-pane fade show active clear ListTime afternoon"
            id="tabs-afternoon"
            role="tabpanel"
            aria-labelledby="tab-afternoon"
          >
            <div className="Time" role="button">
              13:30 - 14:00
            </div>
            <div className="Time" role="button">
              13:30 - 14:00
            </div>
            <div className="Time" role="button">
              13:30 - 14:00
            </div>
            <div className="Time" role="button">
              13:30 - 14:00
            </div>
          </div>
          <div
            class="tab-pane fade show active clear ListTime night"
            id="tabs-noon"
            role="tabpanel"
            aria-labelledby="tab-noon"
          >
            <div className="Time" role="button">
              13:30 - 14:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Day;
