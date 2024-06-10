import { Search, Settings } from "lucide-react";
import Container from "./Container";
import Heading from "./Heading";
import Icons from "./Icons";
import { Button } from "./ui/button";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { showSidebar } from "@/store/sidebarState/sidebarSlice";

const ThirdSecuritiesExchangeSwitch = () => {
  return (
    <div className="lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-muted/60 rounded-full p-1.5 flex items-center max-lg:w-fit max-lg:mt-3 max-lg:mx-auto  max-lg:col-span-full">
      <NavLink
        end
        to="third-securities-exchange/crypto"
        className={({ isActive }) =>
          cn(
            "py-1 lg:py-2 px-6 lg:px-8 max-lg:text-sm rounded-full",
            isActive ? "bg-background" : ""
          )
        }
      >
        Crypto
      </NavLink>

      <NavLink
        end
        to="third-securities-exchange/nft"
        className={({ isActive }) =>
          cn(
            "py-1 lg:py-2 px-6 lg:px-8 max-lg:text-sm rounded-full",
            isActive ? "bg-background" : ""
          )
        }
      >
        NFT
      </NavLink>
    </div>
  );
};

export default function DashboardHeader() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <Container className="xl:h-header-height border-b border-white/20 grid grid-cols-[auto_auto] items-center relative !py-6 2xl:py-0 lg:py-0 max-xl:gap-y-6">
      <div>
        <Heading className="max-sm:text-xl max-2xl:mb-1 mb-2">
          Welcome back, Sean👋🏻
        </Heading>
        <p className="opacity-60">seanweiss@gmail.com</p>
      </div>

      <div className="xl:hidden flex justify-end">
        <Button
          size="icon"
          variant="outline"
          onClick={() => dispatch(showSidebar())}
        >
          <Icons.menuBars />
        </Button>
      </div>

      <div className="flex items-center space-x-6 flex-1 xl:justify-end max-xl:col-span-full">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Search className="size-1/2" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="size-1/2" />
          </Button>
        </div>
        <Button className="max-w-[8rem] w-full">Wallet</Button>
      </div>

      {pathname.split("/").includes("third-securities-exchange") ? (
        <ThirdSecuritiesExchangeSwitch />
      ) : null}
    </Container>
  );
}
