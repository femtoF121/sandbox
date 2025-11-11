import { AiOutlineHome } from "react-icons/ai";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="bg-white w-16 p-2 border-r-[4px] border-gray-200">
      <nav className="flex flex-col items-center">
        <button onClick={() => navigate("/")} className="p-2 icon-button">
          <AiOutlineHome size={24} />
        </button>
      </nav>
    </aside>
  );
};
