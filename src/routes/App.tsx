import {useRoutes } from "react-router-dom";
import { useLocalRoutes } from "./useRoutes"
import { Suspense } from "react";


function App() {
  const routes = useLocalRoutes();
  const router = useRoutes(routes);
  return (
    <Suspense fallback='loading'>
      {router}
    </Suspense>
  )
}

export default App
