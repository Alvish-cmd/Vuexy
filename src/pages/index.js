// ** React Imports
import { useEffect } from "react";

// // ** Next Import
import { useRoutes } from "react-router-dom";

// ** Spinner Import
import Spinner from "../@core/components/spinner/index";

// ** Hook Imports
import { useAuth } from "../hooks/useAuth";

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role) => {
  if (role === "admin") return "/acl";
  else return "/dashboards/analytics";
};

const Home = () => {
  // ** Hooks
  const auth = useAuth();
  const router = useRoutes([{ path: "/home", element: <Home /> }]);
  useEffect(() => {
    if (auth.user && auth.user.role) {
      const homeRoute = getHomeRoute(auth.user.role);

      // Redirect user to Home URL
      router(homeRoute, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Spinner sx={{ height: "100%" }} />;
};

export default Home;
