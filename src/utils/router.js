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
import userChangePassword from "containers/user/UserPage/UserChangePassword/userChangePassword";
import userhelp from "containers/user/UserPage/UserHelp/userhelp";
import tool from "containers/user/Tool/tool";
import AdminDashboard from "admin/Content/Dashboard/AdminDashboard";
import AdminUser from "admin/Content/User/AdminUser";
import AdminTopic from "admin/Content/Topic/AdminTopic";
import AdminPost from "admin/Content/Post/AdminPost";
import AdminHospital from "admin/Content/Hospital/AdminHospital";
import AdminSpecialist from "admin/Content/Specialist/AdminSpecialist";
import infoHospital from "containers/Hospital/InfoHospital/infoHospital";
import doctorManagement from "containers/Hospital/DoctorManagement/doctorManagement";
import InfoDoctor from "containers/Doctor/InfoDoctor.js/infoDoctor";
import ManageScheduleDoctor from "containers/Doctor/ManageScheduleDoctor/manageScheduleDoctor";
import AdminStatistic from "admin/Content/Statistic/AdminStatistic";
import AdminChangePasswordDialogue from "admin/AdminComponent/AdminChangePassword/AdminChangePassword";
import hospitalPassword from "containers/Hospital/ChangePassword/hospitalPassword";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/care/searchDoctor", component: SearchDoctor },
  { path: "/care/searchDoctor/:id/:chuyenkhoa", component: SearchDoctor },
  { path: "/search", component: Search },
  { path: "/categories", component: categories },
  { path: "/care/", component: Care },
  { path: "/care/doctor/:id", component: Doctor },
  { path: "/category/:id/:name", component: category },
  { path: "/care/hospital/:id/:namehospital", component: hospitalPage },
  { path: "/care/service/:id/:nameservice", component: service },
  { path: "/care/specialties", component: specialties },
  { path: "/care/serviceSearch", component: serviceSearch },
  { path: "/user/information/:id", component: userInfo },
  { path: "/user/history", component: userHistory },
  { path: "/user/changePassword/:id", component: userChangePassword },
  { path: "/user/help", component: userhelp },
  { path: "/care/doctor/confirm/:id/:namedoctor", component: confirm },
  { path: "/blog/:id", component: blog },
  { path: "/tool", component: tool, layout: null },
  { path: "/test", component: AdminChangePasswordDialogue, layout: null },
];
const routeAdmin = [
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
  },
  {
    path: "/admin/user",
    component: AdminUser,
  },
  {
    path: "/admin/topic",
    component: AdminTopic,
  },
  {
    path: "/admin/post",
    component: AdminPost,
  },
  {
    path: "/admin/hospital",
    component: AdminHospital,
  },
  {
    path: "/admin/specialist",
    component: AdminSpecialist,
  },
  {
    path: "/admin/statistic",
    component: AdminStatistic,
  },
];
const routeHospital = [
  { path: "/hospital/information/:id", component: infoHospital },
  { path: "/hospital/doctormanagement/:id", component: doctorManagement },
  { path: "/hospital/changepassword/:id", component: hospitalPassword },
];

const routeDoctor = [
  { path: "/doctor/dashboard", component: AdminDashboard },
  { path: "/doctor/information", component: InfoDoctor },
  { path: "/doctor/manageSchedule", component: ManageScheduleDoctor },
];  
export { publicRoutes, routeAdmin, routeHospital, routeDoctor};
