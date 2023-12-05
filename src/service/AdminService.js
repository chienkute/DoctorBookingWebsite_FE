const { default: instance } = require("utils/axiosCutomize");
const addHospital = (username, password, email) => {
  return instance.post(`/api/auth/register/doctor/`, {
    username,
    password,
    email,
  });
};
const getAllAcount = () => {
  return instance.get("/api/accounts?limit=100&offset=0");
};
export { addHospital, getAllAcount };
