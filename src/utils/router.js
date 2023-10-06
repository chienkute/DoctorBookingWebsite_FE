import HomePage from "../containers/user/HomePage/HomePage";
import Login from "../containers/Login/index";
import Register from "../containers/Register";
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
export { publicRoutes };
