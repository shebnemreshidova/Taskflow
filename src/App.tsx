
import {useRoutes } from "react-router-dom";
import { useLocalRoutes } from "./routes/useRoutes"
import { Suspense } from "react";
import "./styles/index.css";


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
