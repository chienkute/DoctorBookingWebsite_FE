import axios from "axios";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
});
const instance = axios.create({
  baseURL: "https://ncc02.pythonanywhere.com/",
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    NProgress.start();
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response && response.data ? response.data : response;
  },
  function (error) {
    NProgress.done();
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  },
);
export default instance;
