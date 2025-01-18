import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex relative">
        <Sidebar />
        <div className="ms-[330px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
