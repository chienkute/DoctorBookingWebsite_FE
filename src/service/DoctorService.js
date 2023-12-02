const { default: instance } = require("utils/axiosCutomize");
const fetchAllSchedule = (limit = 100, offset = 0) => {
    return instance.get("api/schedules/?limit=" + limit + "&offset=" + offset);
};
const fetchAllScheduleByDoctorId = (doctorId, limit = 10, offset=0) => {
    return instance.get("api/schedulerdoctor/?doctor=" + doctorId + "&limit=" + limit + "&offset=" + offset);
};
const addScheduleDoctor = (doctorId, scheduleId) => {
    console.log("add: doctorid" + doctorId + " scheduleid: " + scheduleId)
    return instance.post("api/schedulerdoctor/", { doctor_id: doctorId, schedule_id: scheduleId });
}
const deleteScheduleDoctor = (scheduleDoctorId) => {
    return instance.delete("api/schedulerdoctor/"+scheduleDoctorId+"/");
}
export { fetchAllSchedule, fetchAllScheduleByDoctorId, addScheduleDoctor, deleteScheduleDoctor };
