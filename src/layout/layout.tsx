import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";

const Layout = () => {
  return (
    <>
    <Header/>
    <div className="flex relative">
     <Sidebar/>
      <div className="ms-[330px]">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;
