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

import serviceSearch from "containers/user/ServiceSearch/serviceSearch";
import userInfo from "containers/user/UserPage/UserInfo/userInfo";
import userHistory from "containers/user/UserPage/UserHistory/userHistory";
import confirm from "containers/user/Confirm/confirm";
import blog from "containers/user/Blog/blog";
import AdminPage from "admin/AdminPage";
import userChangePassword from "containers/user/UserPage/UserChangePassword/userChangePassword";
import userhelp from "containers/user/UserPage/UserHelp/userhelp";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/care/searchDoctor", component: SearchDoctor },
  { path: "/care/searchDoctor/:id", component: SearchDoctor },
  { path: "/search", component: Search },
  { path: "/categories", component: categories },
  { path: "/care/", component: Care },
  { path: "/care/doctor/:id", component: Doctor },
  { path: "/category/:id", component: category },
  { path: "/care/hospital/:id", component: hospitalPage },
  { path: "/care/service/:id", component: service },
  { path: "/care/specialties", component: specialties },
  //{ path: "/admin/dashboard", component: AdminPage, layout: null },
  {
    path: "/admin/dashboard",
    component: (props) => (
      <AdminPage {...props} menuName="AdminMenuDashboard" />
    ),
    layout: null,
  },
  {
    path: "/admin/user",
    component: (props) => <AdminPage {...props} menuName="AdminMenuUser" />,
    layout: null,
  },
  {
    path: "/admin/topic",
    component: (props) => <AdminPage {...props} menuName="AdminMenuTopic" />,
    layout: null,
  },
  {
    path: "/admin/post",
    component: (props) => <AdminPage {...props} menuName="AdminMenuPost" />,
    layout: null,
  },
  {
    path: "/admin/tool",
    component: (props) => <AdminPage {...props} menuName="AdminMenuTool" />,
    layout: null,
  },
  {
    path: "/admin/hospital",
    component: (props) => <AdminPage {...props} menuName="AdminMenuHospital" />,
    layout: null,
  },
  {
    path: "/admin/specialist",
    component: (props) => (
      <AdminPage {...props} menuName="AdminMenuSpecialist" />
    ),
    layout: null,
  },
  { path: "/care/serviceSearch", component: serviceSearch },
  { path: "/user/information/:id", component: userInfo },
  { path: "/user/history", component: userHistory },
  { path: "/user/changePassword", component: userChangePassword },
  { path: "/user/help", component: userhelp },
  { path: "/care/doctor/confirm", component: confirm },
  { path: "/blog/:id", component: blog },
];
export { publicRoutes };
