import { ErrorPage, Home } from "../Pages";

import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
// import { contentRoutes } from "./publicRoutes";
// import { privateRoutes } from "./privateRoutes";


const Index = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" index element={<Home />}  />
        <Route path="*" element={<ErrorPage />} />
        <Route path="log-in" element={<Login />} />
        <Route path="Sign-up" element={<Signup />} />
        {/* {contentRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))} */}
      </Route>

      {/* {privateRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))} */}
    </Routes>
  );
};

export { Index };
