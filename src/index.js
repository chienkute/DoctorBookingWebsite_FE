import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./style/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/scss/scrollbar";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss";
import "../node_modules/nprogress/nprogress.css";
import "react-loading-skeleton/dist/skeleton.css";
// import { PersistGate } from "redux-persist/integration/react";
import store from "redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <RouterCustom />
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
);
