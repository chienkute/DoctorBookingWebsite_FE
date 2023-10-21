const { default: instance } = require("utils/axiosCutomize");

const fetchAllUser = (page) => {
  return instance.get(`/api/user?page=${page}`);
};
const postCreateUser = (name, job) => {
  return instance.post("api/user", { name: name, job: job });
};
const login = (username, password) => {
  return instance.post("api/auth/login/", { username, password });
};
const signup = (username, email, password) => {
  return instance.post("api/auth/register/user/", {
    username,
    email,
    password,
  });
};
export { fetchAllUser, postCreateUser, login, signup };
