import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import DashboardHeader from "../DashboardHeader";

function DashboardLayout({
  sidebar = true,
  dashbbaordHeader = true,
}: {
  sidebar?: boolean;
  dashbbaordHeader?: boolean;
}) {
  return (
    <div className="min-h-screen">
      {sidebar ? <DashboardSidebar /> : null}

      <div className="xl:w-[calc(100%-260px)] 2xl:w-[calc(100%-320px)] xl:ml-[260px] 2xl:ml-[320px]">
        {dashbbaordHeader ? <DashboardHeader /> : null}

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
