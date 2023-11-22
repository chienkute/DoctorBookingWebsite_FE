import axios from "axios";

const instance = axios.create({
  baseURL: "https://ncc02.pythonanywhere.com/",
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const access_token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${access_token}`;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response && response.data ? response.data : response;
  },
  function (error) {
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);
export default instance;
