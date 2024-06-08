import { NavLink, Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import { Button } from "../ui/button";
import { Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const ThirdSecuritiesExchangeSwitch = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted/60 rounded-full p-1.5 flex items-center">
      <NavLink
        end
        to="third-securities-exchange/crypto"
        className={({ isActive }) =>
          cn("py-2 px-8 rounded-full", isActive ? "bg-background" : "")
        }
      >
        Crypto
      </NavLink>

      <NavLink
        end
        to="third-securities-exchange/nft"
        className={({ isActive }) =>
          cn("py-2 px-8 rounded-full", isActive ? "bg-background" : "")
        }
      >
        NFT
      </NavLink>
    </div>
  );
};

function DashboardLayout() {
  const { pathname } = useLocation();

  return (
    <div className="grid min-h-screen">
      <DashboardSidebar />

      <main className="ml-[320px]">
        <div className="h-32 border-b border-white/20 px-10 flex items-center justify-between relative">
          <div>
            <h1 className="text-3xl mb-2">Welcome back, Sean👋🏻</h1>
            <p className="opacity-60">seanweiss@gmail.com</p>
          </div>

          {pathname.split("/").includes("third-securities-exchange") ? (
            <ThirdSecuritiesExchangeSwitch />
          ) : null}

          <div className="flex items-center space-x-6 flex-1 justify-end">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Search className="size-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="size-5" />
              </Button>
            </div>
            <Button className="max-w-[8rem] w-full">Wallet</Button>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
