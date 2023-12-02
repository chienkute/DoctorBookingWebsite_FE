import { React, memo, useState, useContext, useEffect } from "react";
import { addDays, addMinutes, format } from "date-fns";
import { convertDayOfWeek, convertDayOfWeektoNumber } from "tool/DataTimeTool";
import { fetchAllSchedule } from "service/DoctorService.js";
import { LoadingContext } from "context/LoadingContext";
import "./manageScheduleDoctor.scss";
const ManageScheduleDoctor = () => {
  const { setLoading } = useContext(LoadingContext);
  const [choosedDate, setChoosedDate] = useState(new Date());
  const [choosedSession, setCurrentSession] = useState(0);
  const [choosedTimes, setChoosedTimes] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [timeMorning, setTimeMorning] = useState([]);
  const [timeAfternoon, setTimeAfternoon] = useState([]);
  const [timeEvening, setTimeEvening] = useState([]);

  const startDate = new Date();
  const endDate = addDays(startDate, 6);

  const getAllSchedule = async () => {
    try {
      setLoading(true);
      let schedules = [];
      while (true) {
        let res = await fetchAllSchedule(100, schedules.length);
        schedules = schedules.concat(res.results);
        if (res.count === schedules.length) {
          break;
        }
      }
      //   let res = await fetchAllSchedule();
      //   console.log("res", res);
      setSchedules(schedules);
      setLoading(false);
      console.log("schedule", schedules);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSchedule();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log("schedules New", schedules);
    handleClickDate(startDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedules]);

  const renderTimeMorningDivs = () => {
    // console.log(choosedTimes.length);
    // console.log(choosedTimes);
    const timeDivs = [];
    console.log("timeMorning.length", timeMorning.length);
    for (let i = 0; i < timeMorning.length; i++) {
      // console.log("timeMorning[i]['start']", timeMorning[i]['start']);
      // console.log("format(timeMorning[i]['start'], 'HH:mm')", format(timeMorning[i]['start'], 'HH:mm'));
      const isTimeChosen = choosedTimes.some(
        (chosenTime) =>
          chosenTime.getTime() === timeMorning[i]["start"].getTime(),
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeMorning[i]["id"]}
          onClick={() => {
            console.log("timemorning[i]['start']", timeMorning[i]["start"]);
            if (isTimeChosen) {
              setChoosedTimes((prevChoosedTimes) => {
                console.log("prevChoosedTimes", prevChoosedTimes);
                prevChoosedTimes.filter(
                  (choosedTime) =>
                    choosedTime.getTime() !== timeMorning[i]["start"].getTime(),
                );
              });
            } else
              setChoosedTimes((prevChoosedTimes) => [
                ...prevChoosedTimes,
                timeMorning[i]["start"],
              ]);
          }}
        >
          <p>{format(timeMorning[i]["start"], "HH:mm")}</p>
          <span> - </span>
          <p>{format(addMinutes(timeMorning[i]["start"], 30), "HH:mm")}</p>
        </div>,
      );
    }
    return timeDivs;
  };

  const renderTimeAfternoonDivs = () => {
    // console.log(choosedTimes.length);
    // console.log(choosedTimes);
    const timeDivs = [];
    for (let i = 0; i < timeAfternoon.length; i++) {
      const isTimeChosen = choosedTimes.some(
        (chosenTime) =>
          chosenTime.getTime() === timeAfternoon[i]["start"].getTime(),
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeAfternoon[i]["id"]}
          onClick={() => {
            console.log(timeAfternoon[i]["start"]);
            if (isTimeChosen) {
              setChoosedTimes((prevChoosedTimes) =>
                prevChoosedTimes.filter(
                  (choosedTime) =>
                    choosedTime.getTime() !==
                    timeAfternoon[i]["start"].getTime(),
                ),
              );
            } else
              setChoosedTimes((prevChoosedTimes) => [
                ...prevChoosedTimes,
                timeAfternoon[i]["start"],
              ]);
          }}
        >
          <p>{format(timeAfternoon[i]["start"], "HH:mm")}</p>
          <span> - </span>
          <p>{format(addMinutes(timeAfternoon[i]["start"], 30), "HH:mm")}</p>
        </div>,
      );
    }
    return timeDivs;
  };
  const renderTimeEveningDivs = () => {
    // console.log(choosedTimes.length);
    // console.log(choosedTimes);
    const timeDivs = [];
    for (let i = 0; i < timeEvening.length; i++) {
      const isTimeChosen = choosedTimes.some(
        (chosenTime) =>
          chosenTime.getTime() === timeEvening[i]["start"].getTime(),
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeEvening[i]["id"]}
          onClick={() => {
            console.log(timeEvening[i]["start"]);
            if (isTimeChosen) {
              setChoosedTimes((prevChoosedTimes) =>
                prevChoosedTimes.filter(
                  (choosedTime) =>
                    choosedTime.getTime() !== timeEvening[i]["start"].getTime(),
                ),
              );
            } else
              setChoosedTimes((prevChoosedTimes) => [
                ...prevChoosedTimes,
                timeEvening[i]["start"],
              ]);
          }}
        >
          <p>{format(timeEvening[i]["start"], "HH:mm")}</p>
          <span> - </span>
          <p>{format(addMinutes(timeEvening[i]["start"], 30), "HH:mm")}</p>
        </div>,
      );
    }
    return timeDivs;
  };

  const handleClickDate = (date) => {
    setChoosedDate(date);
    // lấy thứ của date
    const choosedDayOfWeek = format(date, "EEEE");
    console.log("choosedDayOfWeek", choosedDayOfWeek);
    const choosedDayOfWeekNumber = convertDayOfWeektoNumber(choosedDayOfWeek);

    // thay đổi timeMorning, timeAfternoon, timeEvening
    // Các mảng lưu trữ thời gian cho từng buổi trong ngày
    const timeMorningNew = [];
    const timeAfternoonNew = [];
    const timeEveningNew = [];

    // Lặp qua từng phần tử trong mảng schedules
    schedules.forEach((schedule) => {
      // Lấy giá trị "start" và "end" và dayOfWeek của schedule
      const { id, start, end, days_of_week } = schedule;
      // console.log(days_of_week !== choosedDayOfWeekNumber);
      // console.log(days_of_week);
      // console.log(choosedDayOfWeekNumber);
      if (days_of_week !== choosedDayOfWeekNumber) {
        // tiếp tục vòng lặp
        return;
      }
      // Chuyển đổi "start" và "end" thành đối tượng Date
      const startDate = new Date(`2000-01-01T${start}`);
      const endDate = new Date(`2000-01-01T${end}`);

      // Kiểm tra buổi nào và thêm vào mảng tương ứng
      if (startDate.getHours() >= 8 && endDate.getHours() < 12) {
        timeMorningNew.push({ start: startDate, id: id });
        console.log("log", id, start, end, days_of_week);
      } else if (startDate.getHours() >= 12 && endDate.getHours() < 17) {
        timeAfternoonNew.push({ start: startDate, id: id });
      } else if (startDate.getHours() >= 17 && endDate.getHours() < 21) {
        timeEveningNew.push({ start: startDate, id: id });
      }
    });

    // Hiển thị kết quả
    console.log("Morning:", timeMorningNew);
    console.log("Afternoon:", timeAfternoonNew);
    console.log("Evening:", timeEveningNew);

    setTimeMorning(timeMorningNew);
    setTimeAfternoon(timeAfternoonNew);
    setTimeEvening(timeEveningNew);
  };

  const renderDateDivs = () => {
    const dateDivs = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      const date = currentDate;
      // console.log(format(date, 'yyyy-MM-dd') === format(choosedDate, 'yyyy-MM-dd'))
      dateDivs.push(
        <div
          className={`DateBox ${
            format(date, "yyyy-MM-dd") === format(choosedDate, "yyyy-MM-dd")
              ? "activeDateBox"
              : ""
          }`}
          key={date.toISOString()}
          onClick={() => handleClickDate(date)}
        >
          <p>{convertDayOfWeek(format(date, "EEEE"))}</p>
          <p>{format(date, "yyyy-MM-dd")}</p>
        </div>,
      );

      currentDate = addDays(currentDate, 1);
    }

    return dateDivs;
  };
  return (
    <div>
      <div>
        <label>Khoảng thời gian:</label>
        <button className="ShowDateButton">
          {" "}
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </button>
      </div>
      <div>
        <label>Danh sách các ngày:</label>
        {/* Danh sách các thẻ div từ startDate đến endDate */}
        <div className="DateBoxGroup">{renderDateDivs()}</div>
      </div>
      <div>
        <label>Buổi làm việc:</label>
        <div className="SessionBoxGroup">
          <div
            className={`SessionBox ${
              choosedSession === 0 ? "activeSessionBox" : ""
            }`}
            onClick={() => setCurrentSession(0)}
          >
            <p>Sáng</p>
            <p>(8 khung giờ)</p>
          </div>
          <div
            className={`SessionBox ${
              choosedSession === 1 ? "activeSessionBox" : ""
            }`}
            onClick={() => setCurrentSession(1)}
          >
            <p>Chiều</p>
            <p>(10 khung giờ)</p>
          </div>
          <div
            className={`SessionBox ${
              choosedSession === 2 ? "activeSessionBox" : ""
            }`}
            onClick={() => setCurrentSession(2)}
          >
            <p>Tối</p>
            <p>(8 khung giờ)</p>
          </div>
        </div>
      </div>
      <div>
        <label>Thời gian làm việc:</label>
        <div
          className={`TimeBoxGroup ${
            choosedSession === 0 ? "TimeBoxGroupShow" : ""
          }`}
        >
          {renderTimeMorningDivs()}
        </div>
        <div
          className={`TimeBoxGroup ${
            choosedSession === 1 ? "TimeBoxGroupShow" : ""
          }`}
        >
          {renderTimeAfternoonDivs()}
        </div>
        <div
          className={`TimeBoxGroup ${
            choosedSession === 2 ? "TimeBoxGroupShow" : ""
          }`}
        >
          {renderTimeEveningDivs()}
        </div>
      </div>
    </div>
  );
};

export default memo(ManageScheduleDoctor);
