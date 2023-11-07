import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./style/style.scss";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/scss/scrollbar";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <RouterCustom />
    <ToastContainer autoClose={1000} />
  </BrowserRouter>
  // </Provider>
);
