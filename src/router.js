import MasterLayout from "./containers/theme/masterLayout";
import { Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import { publicRoutes } from "./utils/router";
import { SearchContext } from "context/SearchContext";
import { LoadingContext } from "context/LoadingContext";
import { UpdateContext } from "context/UpdateContext";
const RouterCustom = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <SearchContext.Provider value={{ search, setSearch }}>
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
        </SearchContext.Provider>
      </LoadingContext.Provider>
    </UpdateContext.Provider>
  );
};
export default RouterCustom;
