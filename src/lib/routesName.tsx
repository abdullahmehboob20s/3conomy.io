import Icons from "@/components/Icons";
import ThirdAgentsPage from "@/pages/ThirdAgentsPage";
import ThirdBank from "@/pages/ThirdBankPage";
import ThirdConsulationPage from "@/pages/ThirdConsulationPage";
import ThirdIntegrationPage from "@/pages/ThirdIntegrationPage";
import ThirdLaunchPage from "@/pages/ThirdLaunchPage";
import ThirdMlPage from "@/pages/ThirdMlPage";
import ThirdNamingService from "@/pages/ThirdNamingService";
import ThirdNftExchangePage from "@/pages/ThirdNftExchangePage";
import ThirdSecuritiesExchangePage from "@/pages/ThirdSecuritiesExchangePage";
import { ReactNode } from "react";
import { Outlet, Route } from "react-router-dom";

interface PageDataType {
  route: string;
  Icon: any;
  element: JSX.Element;
  title: string;
  children?: ReactNode;
  link: string;
}

export const dashboardRoutes: Record<string, PageDataType> = {
  "third-naming-service": {
    route: "third-naming-service",
    link: "third-naming-service",
    Icon: Icons.pageSearch,
    element: <ThirdNamingService />,
    title: "third naming service",
  },
  "third-securities-exchange": {
    route: "third-securities-exchange",
    link: "third-securities-exchange/crypto",
    Icon: Icons.exchange,
    title: "Third Securities Exchange",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: (
      <>
        <Route path="crypto" element={<ThirdSecuritiesExchangePage />} />
        <Route path="nft" element={<ThirdNftExchangePage />} />
      </>
    ),
  },
  "third-agents": {
    route: "third-agents",
    link: "third-agents",
    Icon: Icons.bot,
    element: <ThirdAgentsPage />,
    title: "third agents",
  },
  "third-launch": {
    route: "third-launch",
    link: "third-launch",
    Icon: Icons.rocket,
    element: <ThirdLaunchPage />,
    title: "third launch",
  },
  "third-integrations": {
    route: "third-integrations",
    link: "third-integrations",
    Icon: Icons.integration,
    element: <ThirdIntegrationPage />,
    title: "third integrations",
  },
  "third-ml": {
    route: "third-ml",
    link: "third-ml",
    Icon: Icons.mlBot,
    element: <ThirdMlPage />,
    title: "third ML",
  },
  "third-bank": {
    route: "third-bank",
    link: "third-bank",
    Icon: Icons.bank,
    element: <ThirdBank />,
    title: "third bank",
  },
  "third-consulations": {
    route: "third-consulations",
    link: "third-consulations",
    Icon: Icons.team,
    element: <ThirdConsulationPage />,
    title: "third Consultants",
  },
  // "third-securities-exchange-nft": {
  //   route: "third-securities-exchange-nft",
  //   link: "third-securities-exchange-nft",
  //   Icon: Icons.team,
  //   element: <ThirdNftExchangePage />,
  //   title: "Third NFT Exchange",
  // },
};
