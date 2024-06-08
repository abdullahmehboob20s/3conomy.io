import images from "@/lib/images";
import Icons from "../Icons";
import { dashboardRoutes } from "@/lib/routesName";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  text: string;
  route: string;
}

const MenuItem = ({ text, Icon, route }: MenuItemProps) => {
  return (
    <NavLink
      to={route}
      end
      className={({ isActive }) =>
        cn(
          "px-12 flex items-center space-x-5 opacity-60 hover:opacity-80 transition-all duration-200",
          isActive ? "dashboard-link-active opacity-100" : null
        )
      }
    >
      <Icon className="size-5" />
      <span className="capitalize">{text}</span>
    </NavLink>
  );
};

function DashboardSidebar() {
  const { pathname } = useLocation();
  const floatingItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeElement = document.querySelector(
      ".dashboard-link-active"
    ) as HTMLDivElement;

    // console.log();

    if (
      floatingItemRef &&
      floatingItemRef.current &&
      floatingItemRef.current.style
    ) {
      floatingItemRef.current.style.top = activeElement?.offsetTop + "px";
      floatingItemRef.current.style.height = activeElement?.clientHeight + "px";
    }
  }, [pathname]);

  return (
    <aside className="flex flex-col fixed top-0 left-0 h-screen overflow-auto w-[320px]">
      <header className="h-32 relative">
        <img
          src={images["sidebar-wave"]}
          className="w-full h-full object-cover"
          alt=""
        />
      </header>

      <main className="relative flex-1 z-10 pb-20">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-60 rounded-full bg-rainbow blur-[120px] -z-20 opacity-60"></div>
        </div>

        <div className="flex flex-col items-center space-y-4 -mt-12 z-50 relative">
          <div className="w-24 h-24 relative rounded-full p-2">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/20 backdrop-blur-2xl -z-20"></div>
            <img
              src={images["profile-image"]}
              className="w-full h-full z-10"
              alt=""
            />
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-xl">Sean weiss</p>
            <Icons.verified className="size-4" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm px-12 opacity-60 mb-6">Menues</p>

          <ul className="space-y-7 relative z-10">
            <div
              ref={floatingItemRef}
              className="absolute left-0 -z-10 w-full transition-all duration-200 ease-in-out"
            >
              <div className="w-[6px] h-full bg-secondary rounded-r-md"></div>
            </div>

            <li>
              <MenuItem route="/dashboard" Icon={Icons.home} text="dashboard" />
            </li>

            {Object.keys(dashboardRoutes).map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (item: keyof typeof dashboardRoutes | any) => (
                <li key={dashboardRoutes[item].title}>
                  <MenuItem
                    Icon={dashboardRoutes[item].Icon}
                    text={dashboardRoutes[item].title}
                    route={dashboardRoutes[item].link}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </main>
    </aside>
  );
}

export default DashboardSidebar;
