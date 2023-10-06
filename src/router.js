import MasterLayout from "./containers/theme/masterLayout";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "utils/router";
const RouterCustom = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = route.layout === null ? Fragment : MasterLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};
export default RouterCustom;
