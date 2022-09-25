import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <header>header</header>
      <Outlet />
    </main>
  );
};

export default MainLayout;
