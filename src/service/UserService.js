const { default: instance } = require("utils/axiosCutomize");
const editUser = (id, name, gender, phone, address, birthday) => {
  return instance.patch(`/api/users/${id}/`, {
    name,
    gender,
    phone,
    address,
    birthday,
  });
};
const getUserID = (id) => {
  return instance.get(`/api/users/${id}/`);
};
const login = (username, password) => {
  return instance.post("api/auth/login/", { username, password });
};
const fetchAllSpecialties = (limit, offset) => {
  return instance.get(`api/specialties/?limit=${limit}&offset=${offset}`);
};
const fecthAllBlog = () => {
  return instance.get(`/api/blogs/?limit=5&offset=0`);
};
const fetchAllService = () => {
  return instance.get("/api/services/");
};
const getServiceById = (id) => {
  return instance.get(`/api/services/${id}/`);
};
const getDoctorByID = (id) => {
  return instance.get(`/api/doctors/${id}/`);
};
const fetchAllHospital = () => {
  return instance.get("/api/hospitals/");
};
const getHospitalByID = (id) => {
  return instance.get(`/api/hospitals/${id}/`);
};
const signup = (username, email, password) => {
  return instance.post("api/auth/register/user/", {
    username,
    email,
    password,
  });
};
const searchAll = (adress, name) => {
  return instance.get(`/api/search_all/?addres=${adress}&name=${name}`);
};
const search = (service, address, specialty, name, hospital) => {
  return instance.get(
    `api/search_doctor/?service=${service}&address=${address}&specialty=${specialty}&name=${name}&hospital=${hospital}`,
  );
};
const scheduleDoctor = (id) => {
  return instance.get(`/api/getschedulerdoctor/?doctor=${id}`);
};
const Booking = (id_doctor, id_schedule, date, time) => {
  return instance.post("/api/booking/", { id_doctor, id_schedule, date, time });
};
const getBooking = () => {
  return instance.get("/api/appointments/");
};
const fetchAllCategories = (limit, offset) => {
  return instance.get(`/api/categories/?limit=${limit}&offset=${offset}`);
};
const searchBlogByName = (name, offset) => {
  return instance.get(
    `/api/search_blog/?name=${name}&limit=6&offset=${offset}`,
  );
};
const getBlogByIdCategory = (id) => {
  return instance.get(`/api/search_blog/?id_category=${id}&page=1`);
};
const searchBlogByIdCategory = (id, page) => {
  return instance.get(`/api/search_blog/?id_category=${id}&page=${page}`);
};
const getBlogById = (id) => {
  return instance.get(`/api/blogs/${id}/`);
};
const getCategoryById = (id) => {
  return instance.get(`/api/categories/${id}/`);
};
const changePassword = (oldpassword, newpassword, id) => {
  return instance.patch(`/api/accounts/${id}/change_password`, {
    oldpassword,
    newpassword,
  });
};
const getAppoinment = () => {
  return instance.get("/api/appointmentsbyuser/");
};
const ratingAppointment = (id, rating) => {
  return instance.post(`/api/ratingappointment/${id}/`, { rating });
};
const statusAppoinment = (id, status) => {
  return instance.post(`/api/statusappointment/${id}/`, { status });
};
const getDoctorByNameAddress = (name, city) => {
  return instance.get(`/api/search_doctor/?name=${name}&city=${city}`);
};
const getHospitalByNameAddress = (name, city) => {
  return instance.get(`/api/search_hospital/?name=${name}&city=${city}`);
};
const getServiceByNameAddress = (name, city) => {
  return instance.get(`/api/search_service/?name=${name}&city=${city}`);
};
const getSpecialtyByNameAddress = (name, city) => {
  return instance.get(`/api/search_specialty/?name=${name}&city=${city}`);
};
const searchDoctor = (
  name,
  city,
  id_hospital,
  id_specialty,
  id_service,
  page,
) => {
  return instance.get(
    `/api/search_doctor666/?name=${name}&city=${city}&id_hospital=${id_hospital}&id_specialty=${id_specialty}&id_service=${id_service}&page=${page}`,
  );
};
const getDoctorById = (name, city, id_hospital, id_specialty, id_service) => {
  return instance.get(
    `/api/search_doctor666/?name=${name}&city=${city}&id_hospital=${id_hospital}&id_specialty=${id_specialty}&id_service=${id_service}`,
  );
};
const searchHospital = (name, city, id_specialty, id_service, page) => {
  return instance.get(
    `/api/search_hospital666/?name=${name}&city=${city}&id_specialty=${id_specialty}&id_service=${id_service}&page=${page}`,
  );
};
const getSpecialtyByIdHospital = (id_hospital) => {
  return instance.get(`/api/search_specialty666/?id_hospital=${id_hospital}`);
};
const getServiceByIdHospital = (name, id_hospital, page) => {
  return instance.get(
    `/api/search_service666/?name=${name}&id_hospital=${id_hospital}&page=${page}`,
  );
};
const editAvatar = (id, avatar) => {
  return instance.patch(`/api/accounts/${id}/`, avatar, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
const fecthAllDoctor = () => {
  return instance.get("/api/doctors/");
};
export {
  getDoctorByNameAddress,
  getHospitalByNameAddress,
  getServiceByNameAddress,
  getSpecialtyByNameAddress,
  searchDoctor,
  searchHospital,
  getSpecialtyByIdHospital,
  getServiceByIdHospital,
  getAppoinment,
  ratingAppointment,
  statusAppoinment,
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
  Booking,
  getBooking,
  fetchAllHospital,
  fetchAllCategories,
  searchBlogByName,
  getBlogByIdCategory,
  getBlogById,
  getCategoryById,
  changePassword,
  getUserID,
  getServiceById,
  fecthAllBlog,
  editAvatar,
  fecthAllDoctor,
  getDoctorById,
  searchBlogByIdCategory,
};
