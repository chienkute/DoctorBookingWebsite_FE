const { default: instance } = require("utils/axiosCutomize");

const editUser = (id, name) => {
  return instance.patch(`/api/users/${id}/`, {
    name,
  });
};
const login = (username, password) => {
  return instance.post("api/auth/login/", { username, password });
};
const fetchAllSpecialties = () => {
  return instance.get("api/specialties/");
};
const getSpecialtyByID = (id) => {
  return instance.get(`api/specialtydoctor/${id}/`);
};
const fetchAllService = () => {
  return instance.get("api/services/");
};
const getDoctorByID = (id) => {
  return instance.get(`api/doctors/${id}/`);
};
const fetchAllHospital = () => {
  return instance.get("api/hospitals/");
};
const getHospitalByID = (id) => {
  return instance.get(`api/hospitals/${id}/`);
};
const signup = (username, email, password) => {
  return instance.post("api/auth/register/user/", {
    username,
    email,
    password,
  });
};
const searchAll = (adress, name) => {
  return instance.get(`api/search_all/?addres=${adress}&name=${name}`);
};
const search = (service, address, specialty, name, hospital) => {
  return instance.get(
    `api/search_doctor/?service=${service}&address=${address}&specialty=${specialty}&name=${name}&hospital=${hospital}`,
  );
};
const scheduleDoctor = (id) => {
  return instance.get(`api/schedulerdoctor?doctor=${id}`);
};
const getSchedule = (id) => {
  return instance.get(`api/schedules/${id}/`);
};
const Booking = (id_doctor, id_schedule, date, time) => {
  return instance.post("/api/booking/", { id_doctor, id_schedule, date, time });
};
const getBooking = () => {
  return instance.get("/api/appointments/");
};
const fetchAllCategories = () => {
  return instance.get("/api/categories/");
};
const searchBlogByName = (name) => {
  return instance.get(`/api/search_blog/?name=${name}`);
};
const getBlogByIdCategory = (id) => {
  return instance.get(`/api/search_blog/?id_category=${id}`);
};
const getBlogById = (id) => {
  return instance.get(`/api/blogs/${id}/`);
};
const getCategoryById = (id) => {
  return instance.get(`/api/categories/${id}`);
};
const changePassword = (oldpassword, newpassword, id) => {
  return instance.patch(`/api/accounts/${id}/change_password`, {
    oldpassword,
    newpassword,
  });
};
export {
  fetchAllSpecialties,
  fetchAllService,
  searchAll,
  search,
  getDoctorByID,
  editUser,
  login,
  signup,
  getHospitalByID,
  scheduleDoctor,
  getSchedule,
  getSpecialtyByID,
  Booking,
  getBooking,
  fetchAllHospital,
  fetchAllCategories,
  searchBlogByName,
  getBlogByIdCategory,
  getBlogById,
  getCategoryById,
  changePassword,
};
