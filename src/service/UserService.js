const { default: instance } = require("utils/axiosCutomize");

const fetchAllUser = (page) => {
  return instance.get(`/api/users?page=${page}`);
};
const editUser = (id, name) => {
  return instance.patch(`/api/users/${id}/`, {
    name: name,
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
const fetchAllDoctor = () => {
  return instance.get("api/doctors/");
};
const getDoctorByID = (id) => {
  return instance.get(`api/doctors/${id}/`);
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
const searchAll = (name, adress) => {
  return instance.get(`api/search_all/?name=${name}&addres=${adress}`);
};
const search = (name, address, specialty) => {
  return instance.get(
    `api/search_doctor/?specialty=${specialty}&name=${name}&adress=${address}`
  );
};
const scheduleDoctor = (id) => {
  return instance.get(`api/schedulerdoctor?doctor=${id}`);
};
const getSchedule = (id) => {
  return instance.get(`api/schedules/${id}/`);
};

export {
  fetchAllUser,
  fetchAllSpecialties,
  fetchAllService,
  fetchAllDoctor,
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
};
