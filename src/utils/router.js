import HomePage from "../containers/user/HomePage/HomePage";
import Login from "../containers/Login/index";
import Register from "../containers/Register";
import SearchDoctor from "containers/user/SearchDoctor/SearchDoctor";


const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/searchDoctor", component: SearchDoctor}
];
export { publicRoutes };
