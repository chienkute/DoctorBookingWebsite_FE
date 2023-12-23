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
import AdminTopic from "admin/Content/Topic/AdminTopic";
import AdminSpecialist from "admin/Content/Specialist/AdminSpeciality";
import infoHospital from "containers/Hospital/InfoHospital/infoHospital";
import doctorManagement from "containers/Hospital/DoctorManagement/doctorManagement";
import ManageScheduleDoctor from "containers/Doctor/ManageScheduleDoctor/manageScheduleDoctor";
import hospitalPassword from "containers/Hospital/ChangePassword/hospitalPassword";
import dashboardHospital from "containers/Hospital/DashboardHospital/dashboardHospital";
import changePasswordDoctor from "containers/Doctor/ChangePasswordDoctor/changePasswordDoctor";
import manageAppointment from "containers/Doctor/ManageAppointment/manageAppointment";
import manageBlog from "containers/Doctor/ManageBlog/manageBlog";
import informationDoctor from "containers/Doctor/InformationDoctor/informationDoctor";
import AdminService from "admin/Content/Service/AdminService";
import manageService from "containers/Doctor/ManageService/manageService";
import manageSpecialty from "containers/Doctor/ManageSpecialty/manageSpecialty";
import Chatbot from "containers/theme/ChatBox/ChatBoxMain/Chatbot";
import AccountManager from "admin/Content/Account/AccountManager";
import dashboardAdmin from "admin/Content/DashboardAdmin/dashboardAdmin";
import UserManager from "admin/Content/User/UserManager";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/care/search", component: SearchDoctor },
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
  { path: "/chatbox", component: Chatbot, layout: null },
];
const routeAdmin = [
  {
    path: "/admin/dashboard/:id",
    component: dashboardAdmin,
  },
  {
    path: "/admin/users/:id",
    component: UserManager,
  },
  {
    path: "/admin/hospitals/:id",
    component: AccountManager,
  },
  {
    path: "/admin/topic/:id",
    component: AdminTopic,
  },
  {
    path: "/admin/speciality/:id",
    component: AdminSpecialist,
  },
  {
    path: "/admin/service/:id",
    component: AdminService,
  },
];
const routeHospital = [
  { path: "/hospital/information/:id", component: infoHospital },
  { path: "/hospital/doctormanagement/:id", component: doctorManagement },
  { path: "/hospital/changepassword/:id", component: hospitalPassword },
  { path: "/hospital/dashboard/", component: dashboardHospital },
];

const routeDoctor = [
  { path: "/doctor/information/:id", component: informationDoctor },
  { path: "/doctor/manage-schedule/:id", component: ManageScheduleDoctor },
  { path: "/doctor/change-password/:id", component: changePasswordDoctor },
  { path: "/doctor/appointment/:id", component: manageAppointment },
  { path: "/doctor/blog/:id", component: manageBlog },
  { path: "/doctor/service/:id", component: manageService },
  { path: "/doctor/specialty/:id", component: manageSpecialty },
];
export { publicRoutes, routeAdmin, routeHospital, routeDoctor };
