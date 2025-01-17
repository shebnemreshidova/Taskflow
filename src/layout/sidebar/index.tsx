import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { id: 1, title: "Boards", icon: "🏠", path: "/" },
    { id: 2, title: "Profile", icon: "👤", path: "/" },
    { id: 3, title: "Settings", icon: "⚙️", path: "/settings" },
  ];
  return (
    <div className="fixed left-0 top-0 w-[300px] bg-[#172b4d] p-2 h-screen">
      <div className="flex flex-col gap-5">
        {sidebarLinks.map((link) => (
          <NavLink
            className='text-white p-2 rounded-lg'
            key={link.id}
            to={link.path}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#007bff" : "transparent",
              color: isActive ? "#fff" : "#fff",
            })}
          >
            <span className="me-2">{link.icon}</span>
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
