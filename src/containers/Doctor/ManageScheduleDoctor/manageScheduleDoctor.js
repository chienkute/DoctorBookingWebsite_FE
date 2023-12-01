import { React, memo, useState, useContext, useEffect } from "react";
import { addDays, addMinutes, format } from 'date-fns';
import { convertDayOfWeek } from "tool/DataTimeTool";
import { fetchAllSchedule } from "service/DoctorService.js";
import { LoadingContext } from "context/LoadingContext";
import "./manageScheduleDoctor.scss";
// create a function component

const ManageScheduleDoctor = () => {
    const { setLoading } = useContext(LoadingContext);
    const [choosedDate, setChoosedDate] = useState(new Date());
    const [choosedSession, setCurrentSession] = useState(0);
    const [choosedTimes, setChoosedTimes] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [timeMorning, setTimeMorning] = useState([]);
    const [timeAfternoon, setTimeAfternoon] = useState([]);
    const [timeEvening, setTimeEvening] = useState([]);

    const getAllSchedule = async () => {
        try {
          setLoading(true);
          let res = await fetchAllSchedule();
          console.log("res", res);
          if (res) {
            setSchedules(res.results);
            setLoading(false);
            console.log("schedule", res.results);
          }
        }
        catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        getAllSchedule();
        
        // Lọc các lịch trong buổi sáng
        const morningSchedules = schedules.filter(schedule => {
            const startTime = parseTime(schedule.start);
            const endTime = parseTime(schedule.end);
        
            return startTime.getHours() >= 8 && endTime.getHours() < 12;
        });
        
        // Lọc các lịch trong buổi trưa
        const afternoonSchedules = schedules.filter(schedule => {
            const startTime = parseTime(schedule.start);
            const endTime = parseTime(schedule.end);
        
            return startTime.getHours() >= 12 && endTime.getHours() < 17;
        });
        
        // Lọc các lịch trong buổi tối
        const eveningSchedules = schedules.filter(schedule => {
            const startTime = parseTime(schedule.start);
            const endTime = parseTime(schedule.end);
        
            return startTime.getHours() >= 17 && endTime.getHours() < 21;
        });
        
        // Hàm chuyển đổi chuỗi thời gian HH:mm:ss thành đối tượng Date
        function parseTime(timeString) {
            const [hours, minutes, seconds] = timeString.split(':').map(Number);
            const date = new Date();
            date.setHours(hours);
            date.setMinutes(minutes);
            date.setSeconds(seconds || 0);
            return date;
        }
        
        setTimeMorning(morningSchedules);
        setTimeAfternoon(afternoonSchedules);
        setTimeEvening(eveningSchedules);
        console.log("timeMorning", timeMorning);
        console.log("timeAfternoon", timeAfternoon);
        console.log("timeEvening", timeEvening);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const startDate = new Date();
    const endDate = addDays(startDate, 6);

    // // tạo danh sách các khoảng thời gian trong buổi sáng từ 8h đến 12h mỗi khoảng 30p
    // const timeMorning = [];
    // let currentTime = new Date();
    // currentTime.setHours(8);
    // currentTime.setMinutes(0);
    // currentTime.setSeconds(0);
    // currentTime.setMilliseconds(0);
    // while (currentTime.getHours() < 12) {
    //     timeMorning.push(currentTime);
    //     currentTime = addMinutes(currentTime, 30);
    // }
    // // tạo danh sách các khoảng thời gian trong buổi chiều từ 12h đến 17h mỗi khoảng 30p
    // const timeAfternoon = [];
    // currentTime = new Date();
    // currentTime.setHours(12);
    // currentTime.setMinutes(0);
    // currentTime.setSeconds(0);
    // currentTime.setMilliseconds(0);
    // while (currentTime.getHours() < 17) {
    //     timeAfternoon.push(currentTime);
    //     currentTime = addMinutes(currentTime, 30);
    // }
    // // tạo danh sách các khoảng thời gian trong buổi tối từ 17h đến 21h mỗi khoảng 30p
    // const timeEvening = [];
    // currentTime = new Date();
    // currentTime.setHours(17);
    // currentTime.setMinutes(0);
    // currentTime.setSeconds(0);
    // currentTime.setMilliseconds(0);
    // while (currentTime.getHours() < 21) {
    //     timeEvening.push(currentTime);
    //     currentTime = addMinutes(currentTime, 30);
    // }

    // const renderTimeMorningDivs = () => {
    //     const timeDivs = [];
    //     for (let i = 0; i < timeMorning.length; i++) {
    //         timeDivs.push(
    //             <div className="TimeBox" key={timeMorning[i].toISOString()}>
    //                 <p>{format(timeMorning[i], 'HH:mm')}</p>
    //                 <span> - </span>
    //                 <p>{format(addMinutes(timeMorning[i], 30), 'HH:mm')}</p>
    //             </div>
    //         );
    //     }
    //     return timeDivs;
    // };
    const renderTimeMorningDivs = () => {
        // console.log(choosedTimes.length);
        // console.log(choosedTimes);
        const timeDivs = [];
        for (let i = 0; i < timeMorning.length; i++) {
            const isTimeChosen = choosedTimes.some(
                chosenTime => chosenTime.getTime() === timeMorning[i].getTime()
            );
            timeDivs.push(
                <div
                    className={`TimeBox ${isTimeChosen ? 'chooseTimeBox' : 'notChooseTimeBox'}`}
                    key={timeMorning[i].toISOString()}
                    onClick={() => {
                        console.log("timemorning[i]", timeMorning[i]);
                        // chuyển className từ chooseTimeBox thành notChooseTimeBox
                        // chuyển className từ notChooseTimeBox thành chooseTimeBox
                        // thêm timeMorning[i] vào choosedTimes
                        // xóa timeMorning[i] khỏi choosedTimes
                        if (isTimeChosen) {
                            setChoosedTimes(prevChoosedTimes => prevChoosedTimes.filter(
                                choosedTime => choosedTime.getTime() !== timeMorning[i].getTime()
                            ));
                        }
                        else setChoosedTimes(prevChoosedTimes => [...prevChoosedTimes, timeMorning[i]]);
                    }}
                >
                    <p>{format(timeMorning[i], 'HH:mm')}</p>
                    <span> - </span>
                    <p>{format(addMinutes(timeMorning[i], 30), 'HH:mm')}</p>
                </div>
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
                chosenTime => chosenTime.getTime() === timeAfternoon[i].getTime()
            );
            timeDivs.push(
                <div 
                    className={`TimeBox ${isTimeChosen ? 'chooseTimeBox' : 'notChooseTimeBox'}`} 
                    key={timeAfternoon[i].toISOString()}
                    onClick={() => {
                        console.log(timeAfternoon[i]);
                        // chuyển className từ chooseTimeBox thành notChooseTimeBox
                        // chuyển className từ notChooseTimeBox thành chooseTimeBox
                        // thêm timeAfternoon[i] vào choosedTimes
                        // xóa timeAfternoon[i] khỏi choosedTimes
                        if (isTimeChosen) {
                            setChoosedTimes(prevChoosedTimes => prevChoosedTimes.filter(
                                choosedTime => choosedTime.getTime() !== timeAfternoon[i].getTime()
                            ));
                        }
                        else setChoosedTimes(prevChoosedTimes => [...prevChoosedTimes, timeAfternoon[i]]);
                    }}
                >
                    <p>{format(timeAfternoon[i], 'HH:mm')}</p>
                    <span> - </span>
                    <p>{format(addMinutes(timeAfternoon[i], 30), 'HH:mm')}</p>
                </div>
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
                chosenTime => chosenTime.getTime() === timeEvening[i].getTime()
            );
            timeDivs.push(
                <div
                    className={`TimeBox ${isTimeChosen ? 'chooseTimeBox' : 'notChooseTimeBox'}`}
                    key={timeEvening[i].toISOString()}
                    onClick={() => {
                        console.log(timeEvening[i]);
                        // chuyển className từ chooseTimeBox thành notChooseTimeBox
                        // chuyển className từ notChooseTimeBox thành chooseTimeBox
                        // thêm timeEvening[i] vào choosedTimes
                        // xóa timeEvening[i] khỏi choosedTimes
                        if (isTimeChosen) {
                            setChoosedTimes(prevChoosedTimes => prevChoosedTimes.filter(
                                choosedTime => choosedTime.getTime() !== timeEvening[i].getTime()
                            ));
                        }
                        else setChoosedTimes(prevChoosedTimes => [...prevChoosedTimes, timeEvening[i]]);
                    }}
                >
                    <p>{format(timeEvening[i], 'HH:mm')}</p>
                    <span> - </span>
                    <p>{format(addMinutes(timeEvening[i], 30), 'HH:mm')}</p>
                </div>
            );
        }
        return timeDivs;
    };
    // const renderTimeEveningDivs = () => {
    //     const timeDivs = [];
    //     for (let i = 0; i < timeEvening.length; i++) {
    //         timeDivs.push(
    //             <div className="TimeBox" key={timeEvening[i].toISOString()}>
    //                 <p>{format(timeEvening[i], 'HH:mm')}</p>
    //                 <span> - </span>
    //                 <p>{format(addMinutes(timeEvening[i], 30), 'HH:mm')}</p>
    //             </div>
    //         );
    //     }
    //     return timeDivs;
    // };
    
    const handleClickDate = (date) => {
        setChoosedDate(date);
    };

    const renderDateDivs = () => {
        const dateDivs = [];
        let currentDate = startDate;
        while (currentDate <= endDate) {
            const date = currentDate;
            // console.log(format(date, 'yyyy-MM-dd') === format(choosedDate, 'yyyy-MM-dd'))
            dateDivs.push(
                <div 
                    className={`DateBox ${format(date, 'yyyy-MM-dd') === format(choosedDate, 'yyyy-MM-dd') ? 'activeDateBox' : ''}`}
                    key={date.toISOString()}
                    onClick={() => handleClickDate(date)}
                >
                    <p>{convertDayOfWeek(format(date, 'EEEE'))}</p>
                    <p>{format(date, 'yyyy-MM-dd')}</p>
                </div>
            );
        
            currentDate = addDays(currentDate, 1);
        }
    
        return dateDivs;
    };
    return (
        <div>
            <div>
                <label>Khoảng thời gian:</label>
                <button className="ShowDateButton"> {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</button>
            </div>
            <div>
                <label>Danh sách các ngày:</label>
                {/* Danh sách các thẻ div từ startDate đến endDate */}
                <div className="DateBoxGroup">
                {renderDateDivs()}
                </div>
            </div>
            <div>
                <label>Buổi làm việc:</label>
                <div className="SessionBoxGroup">
                    <div 
                        className={`SessionBox ${choosedSession === 0 ? 'activeSessionBox' : ''}`}
                        onClick={() => setCurrentSession(0)}
                    >
                        <p>Sáng</p>
                        <p>(8 khung giờ)</p>
                    </div>
                    <div 
                        className={`SessionBox ${choosedSession === 1 ? 'activeSessionBox' : ''}`}
                        onClick={() => setCurrentSession(1)}
                    >
                        <p>Chiều</p>    
                        <p>(10 khung giờ)</p>
                    </div>
                    <div 
                        className={`SessionBox ${choosedSession === 2 ? 'activeSessionBox' : ''}`}
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
                    className={`TimeBoxGroup ${choosedSession === 0 ? 'TimeBoxGroupShow' : ''}`}
                    
                >
                    {renderTimeMorningDivs()}
                </div>
                <div 
                    className={`TimeBoxGroup ${choosedSession === 1 ? 'TimeBoxGroupShow' : ''}`}
                >
                    {renderTimeAfternoonDivs()}
                </div>
                <div 
                    className={`TimeBoxGroup ${choosedSession === 2 ? 'TimeBoxGroupShow' : ''}`}
                >
                    {renderTimeEveningDivs()}
                </div>
            </div>
        </div>
    );
}

export default memo(ManageScheduleDoctor);