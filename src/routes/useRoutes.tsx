import { Suspense } from "react";

import { Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import { routeEndpoints } from "./endpoint";
import Boards from "../pages/boards";

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
        // Eğer `/` rotasına gelirse, otomatik olarak `/board` rotasına yönlendirilecek
        {
          path: "",
          element: <Navigate to={routeEndpoints.board.index} />,
        },
        // `/board` rotasında Boards bileşeni gösterilecek
        {
          path: routeEndpoints.board.index,
          index: true, // Bu, varsayılan rota olduğunu belirtir
          element: (
            <Suspense fallback="Loading...">
              <Boards />
            </Suspense>
          ),
        },
      ],
    },
  ];
}
