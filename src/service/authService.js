const { default: instance } = require("utils/axiosCutomize");

const postSignIn = (email, password) => {
  return instance.post("api/auth/login/", {
    email,
    password,
  });
};
const postSignUp = (username, email, password) => {
  return instance.post("api/auth/register/user/", {
    username,
    email,
    password,
  });
};
export { postSignIn, postSignUp };
