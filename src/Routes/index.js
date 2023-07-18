import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import { ErrorPage, Home } from "../Pages";

import SharedLayout from "./SharedLayout";
import RequiresAuth from "./RequiresAuth";
import { useAuthContext } from "../Contexts";



import { authRoutes, contentRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";


// const Index = () => {
//   return (
//     <Routes>
//       <Route element={<SharedLayout />}>
//         <Route path="/" index element={<Home />}  />
//         <Route path="*" element={<ErrorPage />} />
//         <Route path="log-in" element={<Login />} />
//         <Route path="Sign-up" element={<Signup />} />
//         {authRoutes.map((route, idx) => (
//           <Route key={idx} path={route.path} element={route.element} />
//         ))}
//       </Route>

//       {/* {privateRoutes.map((route, idx) => (
//         <Route key={idx} path={route.path} element={route.element} />
//       ))} */}
//     </Routes>
//   );
// };

// export { Index };

const Index = () => {
  const { token } = useAuthContext();
  const location = useLocation();

  return (
    <Routes>
      <Route
        element={
          token ? (
            <Navigate
              to={location?.state?.from?.pathname ?? "/"}
              replace={true}
            />
          ) : (
            <Outlet />
          )
        }
      >
        {authRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} exact />
        ))}
      </Route>

      
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<ErrorPage />} />
        {contentRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}

        <Route element={<RequiresAuth />}>
          {privateRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export { Index };
