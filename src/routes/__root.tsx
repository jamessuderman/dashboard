import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen flex justify-start items-start">
      <Sidebar />
      <div className="w-full h-full flex flex-col justify-start items-center">
        <Topbar />
        <div className="w-full h-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  ),
});
