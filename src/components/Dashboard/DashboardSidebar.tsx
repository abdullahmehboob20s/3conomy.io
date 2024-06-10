import images from "@/lib/images";
import Icons from "../Icons";
import { dashboardRoutes } from "@/lib/routesName";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { X } from "lucide-react";
import { hideSidebar } from "@/store/sidebarState/sidebarSlice";
import useMediaQuery from "@/hooks/useMediaQuery";

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
          "px-8 sm:px-6 2xl:px-12 flex items-center space-x-3 2xl:space-x-5 opacity-60 hover:opacity-80 transition-all duration-200",
          isActive ? "dashboard-link-active opacity-100" : null
        )
      }
    >
      <Icon className="size-5" />
      <span className="capitalize max-sm:text-base max-2xl:text-sm">
        {text}
      </span>
    </NavLink>
  );
};

function DashboardSidebar() {
  const { pathname } = useLocation();
  const floatingItemRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const isBellowXl = useMediaQuery("(max-width:1280px)");
  const isSidebarVisible = useSelector(
    (state: RootState) => state.sidebarSlice.value
  );

  const nodeRef = useRef(null);

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

    dispatch(hideSidebar());
  }, [pathname]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isBellowXl ? isSidebarVisible : true}
      unmountOnExit={true}
      mountOnEnter={true}
      timeout={400}
      classNames={{
        appear: "opacity-0",
        appearActive: "transition-all duration-[400ms] opacity-100",
        enter: "opacity-0",
        enterActive: "transition-all ease-in duration-[400ms] opacity-100",
        exitActive: "transition-all duration-[400ms] opacity-0",
      }}
    >
      <div
        ref={nodeRef}
        className="ease-in-out flex flex-col fixed top-0 left-0 h-screen overflow-auto w-[260px] 2xl:w-[320px] hide-scrollbar max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:w-full z-[1000] max-xl:bg-background/80 backdrop-blur-xl"
      >
        <header className="h-header-height relative flex-shrink-0">
          <img
            src={images["sidebar-wave"]}
            className="w-full h-full object-cover"
            alt=""
          />

          <button
            className="absolute top-6 right-8 z-40 opacity-90 max-xl:flex hidden"
            onClick={() => dispatch(hideSidebar())}
          >
            <X className="size-6" />
          </button>
        </header>

        <main className="relative flex-1 z-10 pb-20">
          <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-60 rounded-full bg-rainbow blur-[120px] -z-20 opacity-60"></div>
          </div>

          <div className="flex flex-col items-center space-y-4 -mt-10 2xl:-mt-12 z-50 relative">
            <div className="size-20 2xl:size-24 relative rounded-full p-2">
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
            {/* <p className="text-sm px-12 opacity-60 mb-6">Menues</p> */}

            <ul className="space-y-6 2xl:space-y-7 relative z-10">
              <div
                ref={floatingItemRef}
                className="absolute left-0 -z-10 w-full transition-all duration-200 ease-in-out"
              >
                <div className="w-[6px] h-full bg-secondary rounded-r-md"></div>
              </div>

              <li>
                <MenuItem
                  route="/dashboard"
                  Icon={Icons.home}
                  text="dashboard"
                />
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
      </div>
    </CSSTransition>
  );
}

export default DashboardSidebar;
