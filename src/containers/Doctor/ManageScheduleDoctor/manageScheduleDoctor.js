import { React, memo, useState, useContext, useEffect } from "react";
import { addDays, addMinutes, format } from "date-fns";
import { convertDayOfWeek, convertDayOfWeektoNumber } from "tool/DataTimeTool";
import {
  fetchAllSchedule,
  fetchAllScheduleByDoctorId,
  // addScheduleDoctor,
  // deleteScheduleDoctor,
  addSomeScheduleDoctor,
  deleteSomeScheduleDoctor,
} from "service/DoctorService.js";
import { LoadingContext } from "context/LoadingContext";
import "./manageScheduleDoctor.scss";
import { useParams } from "react-router-dom";
const ManageScheduleDoctor = () => {
  const { id } = useParams();
  const { setLoading } = useContext(LoadingContext);
  const [choosedDate, setChoosedDate] = useState(new Date());
  const [choosedSession, setCurrentSession] = useState(0);
  const [beginChoosedIdSchedules, setBeginChoosedIdSchedules] = useState([]);
  const [choosedIdSchedules, setChoosedIdSchedules] = useState([]);
  const [oldScheduleDoctor, setOldScheduleDoctor] = useState([]);
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
  const getOldSchedules = async () => {
    try {
      setLoading(true);
      let oldSchedules = [];
      while (true) {
        let res = await fetchAllScheduleByDoctorId(id, 10, oldSchedules.length);
        console.log("res", res);
        oldSchedules = oldSchedules.concat(res.results);
        if (res.count === oldSchedules.length) {
          break;
        }
      }
      //   let res = await fetchAllSchedule();
      //   console.log("res", res);
      setOldScheduleDoctor(
        oldSchedules.map((oldSchedule) => {
          return {
            id: oldSchedule.id,
            id_schedule: oldSchedule.schedule.id,
          };
        }),
      );
      const oldIdSchedules = oldSchedules.map(
        (oldSchedule) => oldSchedule.schedule.id,
      );
      setChoosedIdSchedules(oldIdSchedules);
      setBeginChoosedIdSchedules(oldIdSchedules);
      setLoading(false);
      console.log("oldSchedules", oldSchedules);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //     // getAllSchedule();
    //     const morningSchedules = schedules.filter((schedule) => {
    //       const startTime = parseTime(schedule.start);
    //       const endTime = parseTime(schedule.end);
    //       return startTime.getHours() >= 8 && endTime.getHours() < 12;
    //     });
    //     // Lọc các lịch trong buổi trưa
    //     const afternoonSchedules = schedules.filter((schedule) => {
    //       const startTime = parseTime(schedule.start);
    //       const endTime = parseTime(schedule.end);

    //       return startTime.getHours() >= 12 && endTime.getHours() < 17;
    //     });
    //     // Lọc các lịch trong buổi tối
    //     const eveningSchedules = schedules.filter((schedule) => {
    //       const startTime = parseTime(schedule.start);
    //       const endTime = parseTime(schedule.end);

    //       return startTime.getHours() >= 17 && endTime.getHours() < 21;
    //     });
    //     // Hàm chuyển đổi chuỗi thời gian HH:mm:ss thành đối tượng Date
    //     function parseTime(timeString) {
    //       const [hours, minutes, seconds] = timeString.split(":").map(Number);
    //       const date = new Date();
    //       date.setHours(hours);
    //       date.setMinutes(minutes);
    //       date.setSeconds(seconds || 0);
    //       return date;
    //     }
    //     setTimeMorning(morningSchedules);
    //     setTimeAfternoon(afternoonSchedules);
    //     setTimeEvening(eveningSchedules);
    //     console.log("timeMorning", timeMorning);
    //     console.log("timeAfternoon", timeAfternoon);
    //     console.log("timeEvening", timeEvening);
    getAllSchedule();
    getOldSchedules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log("schedules New", schedules);
    handleClickDate(startDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedules]);

  const renderTimeMorningDivs = () => {
    // console.log(choosedIdSchedules.length);
    // console.log(choosedIdSchedules);
    const timeDivs = [];
    console.log("choosedIdSchedules.length", choosedIdSchedules.length);
    for (let i = 0; i < timeMorning.length; i++) {
      // console.log("timeMorning[i]['start']", timeMorning[i]['start']);
      // console.log("format(timeMorning[i]['start'], 'HH:mm')", format(timeMorning[i]['start'], 'HH:mm'));
      const isTimeChosen = choosedIdSchedules.some(
        (choosedIdSchedule) => choosedIdSchedule === timeMorning[i]["id"],
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeMorning[i]["id"]}
          onClick={() => {
            console.log("timemorning[i]['id']", timeMorning[i]["id"]);
            if (isTimeChosen) {
              setChoosedIdSchedules((prevChoosedIdSchedules) => {
                console.log("prevChoosedIdSchedules", prevChoosedIdSchedules);
                return prevChoosedIdSchedules.filter(
                  (choosedIdSchedule) =>
                    choosedIdSchedule !== timeMorning[i]["id"],
                );
              });
            } else
              setChoosedIdSchedules((prevChoosedIdSchedules) => [
                ...prevChoosedIdSchedules,
                timeMorning[i]["id"],
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
    // console.log(choosedIdSchedules.length);
    // console.log(choosedIdSchedules);
    const timeDivs = [];
    for (let i = 0; i < timeAfternoon.length; i++) {
      const isTimeChosen = choosedIdSchedules.some(
        (choosedIdSchedule) => choosedIdSchedule === timeAfternoon[i]["id"],
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeAfternoon[i]["id"]}
          onClick={() => {
            console.log(timeAfternoon[i]["id"]);
            if (isTimeChosen) {
              setChoosedIdSchedules((prevChoosedIdSchedules) =>
                prevChoosedIdSchedules.filter(
                  (choosedIdSchedule) =>
                    choosedIdSchedule !== timeAfternoon[i]["id"],
                ),
              );
            } else
              setChoosedIdSchedules((prevChoosedIdSchedules) => [
                ...prevChoosedIdSchedules,
                timeAfternoon[i]["id"],
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
    // console.log(choosedIdSchedules.length);
    // console.log(choosedIdSchedules);
    const timeDivs = [];
    for (let i = 0; i < timeEvening.length; i++) {
      const isTimeChosen = choosedIdSchedules.some(
        (choosedIdSchedule) => choosedIdSchedule === timeEvening[i]["id"],
      );
      timeDivs.push(
        <div
          className={`TimeBox ${
            isTimeChosen ? "chooseTimeBox" : "notChooseTimeBox"
          }`}
          key={timeEvening[i]["id"]}
          onClick={() => {
            console.log(timeEvening[i]["id"]);
            if (isTimeChosen) {
              setChoosedIdSchedules((prevChoosedIdSchedules) =>
                prevChoosedIdSchedules.filter(
                  (choosedIdSchedule) =>
                    choosedIdSchedule !== timeEvening[i]["id"],
                ),
              );
            } else
              setChoosedIdSchedules((prevChoosedIdSchedules) => [
                ...prevChoosedIdSchedules,
                timeEvening[i]["id"],
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
    <div className="managedoctor__content">
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
            <p>({timeMorning.length} khung giờ)</p>
          </div>
          <div
            className={`SessionBox ${
              choosedSession === 1 ? "activeSessionBox" : ""
            }`}
            onClick={() => setCurrentSession(1)}
          >
            <p>Chiều</p>
            <p>({timeAfternoon.length} khung giờ)</p>
          </div>
          <div
            className={`SessionBox ${
              choosedSession === 2 ? "activeSessionBox" : ""
            }`}
            onClick={() => setCurrentSession(2)}
          >
            <p>Tối</p>
            <p>({timeEvening.length} khung giờ)</p>
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
      <div className="manage_button">
        <button
          className={`saveScheduleBtn ${
            choosedIdSchedules.length === 0 ? "disableBtn" : ""
          }`}
          onClick={async () => {
            try {
              setLoading(true);
              // tìm id ScheduleDoctor cần thêm
              const AddIdSchedules = choosedIdSchedules.filter(
                (choosedIdSchedule) =>
                  !beginChoosedIdSchedules.includes(choosedIdSchedule),
              );
              const DeleteIdSchedules = beginChoosedIdSchedules.filter(
                (beginChoosedIdSchedule) =>
                  !choosedIdSchedules.includes(beginChoosedIdSchedule),
              );
              if (AddIdSchedules.length !== 0)
                await addSomeScheduleDoctor(id, AddIdSchedules);
              // for (let i = 0; i < AddIdSchedules.length; i++) {
              //   await addScheduleDoctor(3, AddIdSchedules[i]);
              // }
              const deleteScheduleDoctorIds = [];
              for (let i = 0; i < DeleteIdSchedules.length; i++) {
                for (let j = 0; j < oldScheduleDoctor.length; j++) {
                  if (
                    DeleteIdSchedules[i] === oldScheduleDoctor[j].id_schedule
                  ) {
                    console.log(
                      "oldScheduleDoctor[j].id",
                      oldScheduleDoctor[j].id,
                    );
                    deleteScheduleDoctorIds.push(oldScheduleDoctor[j].id);
                    // await deleteScheduleDoctor(oldScheduleDoctor[j].id);
                    break;
                  }
                }
              }
              if (deleteScheduleDoctorIds.length !== 0)
                await deleteSomeScheduleDoctor(deleteScheduleDoctorIds);
              // load lại oldScheduleDoctor
              getOldSchedules();
              setLoading(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <p>Lưu lịch làm việc</p>
        </button>
      </div>
    </div>
  );
};

export default memo(ManageScheduleDoctor);
