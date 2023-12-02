const { default: instance } = require("utils/axiosCutomize");
const fetchAllSchedule = (limit = 100, offset = 0) => {
    return instance.get("api/schedules/?limit=" + limit + "&offset=" + offset);
};
const fetchAllScheduleByDoctorId = (doctorId) => {
    return instance.get("api/getschedulerdoctor/?doctor=" + doctorId);
};
export { fetchAllSchedule, fetchAllScheduleByDoctorId };