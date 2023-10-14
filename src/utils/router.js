import HomePage from "../containers/user/HomePage/HomePage";
import Login from "../containers/Login/index";
import Register from "../containers/Register";
import SearchDoctor from "containers/user/SearchDoctor/SearchDoctor";
import Search from "containers/user/Search/Search";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/searchDoctor", component: SearchDoctor },
  { path: "/search", component: Search },
];
export { publicRoutes };
