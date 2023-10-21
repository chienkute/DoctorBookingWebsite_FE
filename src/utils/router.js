import HomePage from "../containers/user/HomePage/HomePage";
import Login from "../containers/Login/index";
import Register from "../containers/Register";
import SearchDoctor from "containers/user/SearchDoctor/SearchDoctor";
import Search from "containers/user/Search/Search";
import categories from "containers/user/Categories/categories";
import Care from "containers/user/Care/care";
import UserPage from "containers/user/UserPage/UserPage";
import category from "containers/user/Category/category";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/searchDoctor", component: SearchDoctor },
  { path: "/search", component: Search },
  { path: "/categories", component: categories },
  { path: "/care/", component: Care },
  { path: "/user/", component: UserPage },
  { path: "/category/", component: category, layout: null },
];
export { publicRoutes };
