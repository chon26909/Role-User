import { FC } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RequireAuth from "./components/RequireAuth";
import ManageAccount from "./pages/ManageAccount";
import AuthProvider from "./context/AuthProvider";
import PageNotFound from "./pages/PageNotFound";

const ROLES = {
  user: 1,
  admin: 2,
  supervisor: 10,
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.supervisor]} />}>
              <Route index element={<DashboardPage />} />
              <Route path="uma" element={<ManageAccount />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
