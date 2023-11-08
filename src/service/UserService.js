const { default: instance } = require("utils/axiosCutomize");

const fetchAllUser = () => {
  return instance.get("/api/users/");
};
const postCreateUser = (name, job) => {
  return instance.post("api/user", { name: name, job: job });
};
const login = (username, password) => {
  return instance.post("api/auth/login/", { username, password });
};
const fetchAllSpecialties = () => {
  return instance.get("api/specialties/");
};
const getSpecialtiesById = (id) => {
  return instance.get(`api/specialties/${id}/`);
};
const fetchAllService = () => {
  return instance.get("api/services/");
};
const fetchAllTools = () => {
  return instance.get("api/tools/");
};
const fetchAllDoctor = () => {
  return instance.get("api/doctors/");
};
const fetchAllHospital = () => {
  return instance.get("api/hospitals/");
};
const signup = (username, email, password) => {
  return instance.post("api/auth/register/user/", {
    username,
    email,
    password,
  });
};
export {
  fetchAllUser,
  fetchAllSpecialties,
  getSpecialtiesById,
  fetchAllService,
  fetchAllTools,
  fetchAllDoctor,
  fetchAllHospital,
  postCreateUser,
  login,
  signup,
};
