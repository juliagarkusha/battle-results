import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <>
      <header>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/popular" className="nav-link">Popular</NavLink>
        <NavLink to="/battle" className="nav-link">Battle</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
