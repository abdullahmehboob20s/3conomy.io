import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import DashboardLayout from "./components/layout/DashboardLayout";
import { dashboardRoutes } from "./lib/routesName";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />

          {Object.keys(dashboardRoutes).map((item) => (
            <Route
              key={dashboardRoutes[item].route}
              path={dashboardRoutes[item].route}
              element={dashboardRoutes[item].element}
              children={dashboardRoutes[item].children}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
