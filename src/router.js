import MasterLayout from "./containers/theme/masterLayout";
import { Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import {
  publicRoutes,
  routeAdmin,
  routeHospital,
  routeDoctor,
} from "./utils/router";
import { UpdateContext } from "context/UpdateContext";
import adminLayout from "containers/theme/adminLayout";
import hospitalLayout from "containers/theme/hospitalLayout";
import DoctorLayout from "containers/theme/doctorLayout";
const RouterCustom = () => {
  const [update, setUpdate] = useState(false);
  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
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
        {routeAdmin.map((route, index) => {
          const Layout = adminLayout;
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
        {routeHospital.map((route, index) => {
          const Layout = hospitalLayout;
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
        {routeDoctor.map((route, index) => {
          const Layout = DoctorLayout;
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
    </UpdateContext.Provider>
  );
};
export default RouterCustom;
