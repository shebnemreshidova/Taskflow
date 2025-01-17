import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import { routeEndpoints } from "./endpoint";
const Settings = lazy(() => import('../pages/settings'))
const Boards=lazy(()=>import("../pages/boards"))

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
          element: <Navigate to={routeEndpoints.board} />,
        },
        {
          path: routeEndpoints.board,
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
      ],
    },
  ];
}
