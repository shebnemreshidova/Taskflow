import { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import { routeEndpoints } from "./endpoint";
import { Navigate } from "react-router-dom";
const Settings = lazy(() => import('../pages/settings'))
const Boards=lazy(()=>import("../pages/boards"))
const Profile=lazy(()=>import("../pages/profile"))

export function useLocalRoutes() {
  return [
    {
      path: "/",
      element: (
        <Suspense fallback="Loading...">
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: <Navigate to={routeEndpoints.boards} />,
        },
        {
          path: routeEndpoints.boards,
          index: true,
          element: (
            <Suspense fallback="Loading...">
              <Boards />
            </Suspense>
          ),
        },
        {
          path: routeEndpoints.settings,
          element: (
            <Suspense fallback="Loading...">
              <Settings />
            </Suspense>
          ),
        },
        {
          path: routeEndpoints.profile,
          element: (
            <Suspense fallback="Loading...">
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ];
}
