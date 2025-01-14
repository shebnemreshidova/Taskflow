import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <div>
        <Outlet /> {/* Burada alt sayfalar gösterilecek */}
      </div>
    </div>
  );
};

export default Layout;
