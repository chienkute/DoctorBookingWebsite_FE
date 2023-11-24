import HomePage from "../containers/user/HomePage/HomePage";
import Login from "../containers/Login/index";
import Register from "../containers/Register";
import SearchDoctor from "containers/user/SearchDoctor/SearchDoctor";
import Search from "containers/user/Search/Search";
import categories from "containers/user/Categories/categories";
import Care from "containers/user/Care/care";
import category from "containers/user/Category/category";
import hospitalPage from "containers/user/HospitalPage/hospitalPage";
import service from "containers/user/Service/service";
import specialties from "containers/user/Specialties/specialties";
import Doctor from "containers/user/Doctor/Doctor";
import AdminPage from "admin/AdminPage";

import serviceSearch from "containers/user/ServiceSearch/serviceSearch";
import userInfo from "containers/user/UserPage/UserInfo/userInfo";
import routesConfig from "../config/routes";
import userHistory from "containers/user/UserPage/UserHistory/userHistory";
import confirm from "containers/user/Confirm/confirm";
import blog from "containers/user/Blog/blog";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/searchDoctor", component: SearchDoctor },
  { path: "/search", component: Search },
  { path: "/categories", component: categories },
  { path: "/care/", component: Care },
  { path: "/care/doctor/:id", component: Doctor },
  { path: "/category/", component: category },
  { path: "/care/hospital/", component: hospitalPage },
  { path: "/care/service", component: service },
  { path: "/care/specialties", component: specialties },
  { path: "/admin", component: AdminPage },
  { path: "/serviceSearch", component: serviceSearch },
  { path: routesConfig.userinfo, component: userInfo },
  { path: "/user/history", component: userHistory },
  { path: "/user/changePassword", component: userHistory },
  { path: "/user/help", component: userHistory },
  { path: "/care/doctor/confirm", component: confirm },
  { path: "/blog", component: blog },
];
export { publicRoutes };
