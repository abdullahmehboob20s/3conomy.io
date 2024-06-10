import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import DashboardLayout from "./components/layout/DashboardLayout";
import { dashboardRoutes } from "./lib/routesName";
import DashboardPage from "./pages/DashboardPage";
import ThirdAgentsPage from "./pages/ThirdAgentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="dashboard">
          <Route element={<DashboardLayout dashbbaordHeader={false} />}>
            <Route path="third-agents" element={<ThirdAgentsPage />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />

            {Object.keys(dashboardRoutes).map((item) =>
              item == "third-agents" ? null : (
                <Route
                  key={dashboardRoutes[item].route}
                  path={dashboardRoutes[item].route}
                  element={dashboardRoutes[item].element}
                  children={dashboardRoutes[item].children}
                />
              )
            )}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
