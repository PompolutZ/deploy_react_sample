import { Link, Outlet } from "react-router-dom";
import "./index.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <Link to="/">Counter</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </div>
  );
};
